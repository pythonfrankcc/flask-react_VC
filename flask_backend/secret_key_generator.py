import binascii,os
a =binascii.hexlify(os.urandom(24))
print(a)