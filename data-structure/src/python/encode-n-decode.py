import base64

# Encoding
text = "파이썬"
encoded_text = base64.b64encode(text.encode("utf-8"))
print(encoded_text)

# Decoding
decoded_text = base64.b64decode(encoded_text).decode("utf-8")
print(decoded_text)
