# Identity Challenge
```
curl -s "https://parakram.ahd-cyber.org/0pix/0pix.png" | strings | grep GIF89 | cut -d ";" -f 2 | base64 -di
```

# WIFI Station
```
https://hashcat.net/wiki/doku.php?id=cracking_wpawpa2
hcxessidtool --hccapx1=challenge.hccapx --essidmacapout=out
go to 2no.co/2LfXB5
find 40g0f8l1
use 40g0f8l1 as charset for bruteforce
hashcat -a 3 -m 2500 -1 40g0f8l1 w.hccapx ?1?1?1?1?1?1?1?1
```

# POST Office Document Error
```
curl -s "https://parakram.ahd-cyber.org/xerox/" --data "username=gangadhar&password=ShaktiMan" | grep -Po "FLAG.*}"
```

# K3yG3n Malware

```
import base64

string = "RU9CRBl9WHZRUEJ8bkJJTFF8FFBCREZQXg=="

b = bytearray(base64.b64decode(string))

for i in range(len(b)):
    b[i] ^= 35

with open("win.bin", "wb") as w:
    w.write(b)
```