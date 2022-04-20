import requests
import json

response = requests.get("https://api.openbrewerydb.org/breweries?by_state=texas")
list = response.json()

#print(list)
json_str = json.dumps(response.json())

with open("texasbreweries.json", "w") as f:
    f.write(json_str)