interface Draggable {
  dragStartHandler(event: DragEvent): void
  dragEndHandler(event: DragEvent): void
}

interface DragTarget {
  dragOverHandler(event: DragEvent): void
  dropHandler(event: DragEvent): void
  dragLeaveHandler(event: DragEvent): void
}

enum ProjectStatus {
  active,
  finished,
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AutoBind = (_: any, _2: string, descriptor: PropertyDescriptor) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const originalMethod = descriptor.value
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      return originalMethod.bind(this)
    },
  }

  return adjDescriptor
}

class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatus,
  ) {}
}

type Listener<T> = (items: T[]) => void

class State<T> {
  protected listeners: Listener<T>[] = []

  addListener(listenerFn: Listener<T>) {
    this.listeners.push(listenerFn)
  }
}

class ProjectState extends State<Project> {
  private projects: Project[] = []
  private static instance: ProjectState

  private constructor() {
    super()
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new ProjectState()
    }
    return this.instance
  }

  addProject(title: string, description: string, numOfPeople: number) {
    const newProject = new Project(Math.random().toString(), title, description, numOfPeople, ProjectStatus.active)
    this.projects.push(newProject)
    this.updateListeners()
  }

  moveProject(projectId: string, newStatus: ProjectStatus) {
    const project = this.projects.find(prj => prj.id === projectId)
    if (project && project.status !== newStatus) {
      project.status = newStatus
      this.updateListeners()
    }
  }

  private updateListeners() {
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice())
    }
  }
}

const projectState = ProjectState.getInstance()

abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement
  hostElement: T
  element: U

  constructor(
    private templateId: string,
    private hostElementId: string,
    private insertAtStart: boolean,
    private newElementId?: string,
  ) {
    this.templateElement = document.getElementById(this.templateId)! as HTMLTemplateElement
    this.hostElement = document.getElementById(this.hostElementId)! as T

    const importedNode = document.importNode(this.templateElement.content, true)
    this.element = importedNode.firstElementChild as U
    if (this.newElementId) {
      this.element.id = this.newElementId
    }

    this.attach(this.insertAtStart)
  }

  private attach(insertAtBeginning: boolean) {
    this.hostElement.insertAdjacentElement(insertAtBeginning ? 'afterbegin' : 'beforeend', this.element)
  }

  abstract configure(): void
  abstract renderContent(): void
}

class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> implements Draggable {
  constructor(
    hostId: string,
    private project: Project,
  ) {
    super('single-project', hostId, false, project.id)

    this.configure()
    this.renderContent()
  }

  get persons() {
    return this.project.people === 1 ? '1 person' : `${this.project.people} persons`
  }

  @AutoBind
  dragStartHandler(event: DragEvent) {
    if (event.dataTransfer) {
      event.dataTransfer.setData('text/plain', this.project.id)
      event.dataTransfer.effectAllowed = 'move'
    }
  }

  dragEndHandler(event: DragEvent) {
    console.log(event)
  }

  configure() {
    this.element.addEventListener('dragstart', this.dragStartHandler)
    this.element.addEventListener('dragend', this.dragEndHandler)
  }

  renderContent() {
    this.element.querySelector('h2')!.textContent = this.project.title
    this.element.querySelector('h3')!.textContent = this.persons + ' assigned'
    this.element.querySelector('p')!.textContent = this.project.description
  }
}

class ProjectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget {
  private assignedProjects: Project[] = []

  constructor(private type: 'active' | 'finished') {
    super('project-list', 'app', false, `${type}-projects`)

    this.configure()
    this.renderContent()
  }

  @AutoBind
  dragOverHandler(event: DragEvent) {
    if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
      event.preventDefault()
      const listEl = this.element.querySelector('ul')!
      listEl.classList.add('droppable')
    }
  }

  @AutoBind
  dropHandler(event: DragEvent) {
    const prjId = event.dataTransfer!.getData('text/plain')
    projectState.moveProject(prjId, ProjectStatus[this.type])
  }

  @AutoBind
  dragLeaveHandler(_: DragEvent) {
    const listEl = this.element.querySelector('ul')!
    listEl.classList.remove('droppable')
  }

  configure() {
    this.element.addEventListener('dragover', this.dragOverHandler)
    this.element.addEventListener('dragleave', this.dragLeaveHandler)
    this.element.addEventListener('drop', this.dropHandler)
    projectState.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter(project => project.status === ProjectStatus[this.type])
      this.assignedProjects = relevantProjects
      this.renderProjects()
    })
  }

  renderContent() {
    const listId = `${this.type}-projects-list`
    this.element.querySelector('ul')!.id = listId
    this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + ' PROJECTS'
  }

  private renderProjects() {
    const listEl = document.getElementById(`${this.type}-projects-list`)! as HTMLUListElement
    listEl.innerHTML = ''
    for (const prjItem of this.assignedProjects) {
      new ProjectItem(this.element.querySelector('ul')!.id, prjItem)
    }
  }
}

interface Validatable {
  value: string | number
  required?: boolean
  minLength?: number
  maxLength?: number
  min?: number
  max?: number
}

const validate = (validatableInput: Validatable) => {
  let isValid = true
  if (validatableInput.required) {
    isValid = isValid && validatableInput.value.toString().trim().length !== 0
  }
  if (!!validatableInput.minLength && typeof validatableInput.value === 'string') {
    isValid = isValid && validatableInput.value.length >= validatableInput.minLength
  }
  if (!!validatableInput.maxLength && typeof validatableInput.value === 'string') {
    isValid = isValid && validatableInput.value.length <= validatableInput.maxLength
  }
  if (!!validatableInput.min && typeof validatableInput.value === 'number') {
    isValid = isValid && validatableInput.value >= validatableInput.min
  }
  if (!!validatableInput.max && typeof validatableInput.value === 'number') {
    isValid = isValid && validatableInput.value <= validatableInput.max
  }

  return isValid
}

class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  private titleInputElement: HTMLInputElement
  private descriptionInputElement: HTMLInputElement
  private peopleInputElement: HTMLInputElement

  constructor() {
    super('project-input', 'app', true, 'user-input')
    this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement
    this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement
    this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement

    this.configure()
    this.renderContent()
  }

  configure() {
    this.element.addEventListener('submit', this.submitHandler)
  }

  renderContent() {}

  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value
    const enteredDescription = this.descriptionInputElement.value
    const enteredPeople = Number(this.peopleInputElement.value)

    const titleValidatable: Validatable = {
      value: enteredTitle,
      required: true,
    }
    const descriptionValidatable: Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 5,
    }
    const peopleValidatable: Validatable = {
      value: enteredPeople,
      required: true,
      min: 1,
      max: 5,
    }
    const validated = validate(titleValidatable) && validate(descriptionValidatable) && validate(peopleValidatable)

    return validated ? [enteredTitle, enteredDescription, enteredPeople] : alert('Invalid input, please try again!')
  }

  private clearInputs() {
    this.titleInputElement.value = ''
    this.descriptionInputElement.value = ''
    this.peopleInputElement.value = ''
  }

  @AutoBind // resolving 'this' binding
  private submitHandler(event: Event) {
    event.preventDefault()
    const userInput = this.gatherUserInput()
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput
      projectState.addProject(title, desc, people)
      this.clearInputs()
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const projectInput = new ProjectInput()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const activeProjectList = new ProjectList('active')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const finishedProjectList = new ProjectList('finished')
