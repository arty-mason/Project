### DEPLOY SERVER
firebase deploy --only functions

###
COLLECTION
- id 
- name
- description
- type 
- imgPath (optional)
- tags 
- userId
- createdAt 
- updatedAt 
- itemsFieldTemplate (array):
a. name
b. valueType

### 
ITEM:
- id
- collectionId
- name 
- description
- imgPath (optional)
- tags
- customFields (object):
key: name
value: any
- likes amount

### 
COMMENT:
- id 
- itemId
- userId
- userFullName
- text
- createdAt