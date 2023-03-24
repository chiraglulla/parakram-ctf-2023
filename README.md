# Identity Challenge
```sh
curl -s "https://parakram.ahd-cyber.org/0pix/0pix.png" | strings | grep GIF89 | cut -d ";" -f 2 | base64 -di
```

# WIFI Station
```sh
https://hashcat.net/wiki/doku.php?id=cracking_wpawpa2
hcxessidtool --hccapx1=challenge.hccapx --essidmacapout=out
go to 2no.co/2LfXB5
find 40g0f8l1
use 40g0f8l1 as charset for bruteforce
hashcat -a 3 -m 2500 -1 40g0f8l1 w.hccapx ?1?1?1?1?1?1?1?1
```

# POST Office Document Error
```sh
curl -s "https://parakram.ahd-cyber.org/xerox/" --data "username=gangadhar&password=ShaktiMan" | grep -Po "FLAG.*}"
```

# K3yG3n Malware

```sh
import base64

string = "RU9CRBl9WHZRUEJ8bkJJTFF8FFBCREZQXg=="

b = bytearray(base64.b64decode(string))

for i in range(len(b)):
    b[i] ^= 35

with open("win.bin", "wb") as w:
    w.write(b)
```

# Anonymous
```sh
zsteg -a b-10111110.png | grep flag
```

# Yuck Malware
```sh
exiftool * | #!/bin/sh

for i in yuck/*.enc; do
    {
        base58 -d "${i}" > "${i%.enc}"
        rm "${i}"
        echo $i
    } &
done
```

# .noitpyrcnE ROX
```sh
xortool -l 21 -b v.jpg.enc
```

# Forensic
- We extracted the image, scooby.img using PowerISO.
- We foun ~$temp
- We found it is a Word temp file (.docx)
- We unzipped it
- We got the URL of k3y.html, scooby/.Trash/~$temp/word/_rels/document.xml.rels
- We got the password to ~$4nsic.docx
- Got the hex string from it
- Decoded from HEX

```sh
curl -s "https://parakram.ahd-cyber.org/4nsic/k3y.html" | grep "label" | grep -Po "(?<=\>).*(?=<)"
```
```sh
echo "666c61673a5e7b696c6c7573696f6e5f6f776c5f31337d" | xxd -r -p
```