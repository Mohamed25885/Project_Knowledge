migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9b0nkcuul7b4g7m")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ag7dtwsu",
    "name": "disease",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": 1,
      "max": 245,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9b0nkcuul7b4g7m")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ag7dtwsu",
    "name": "name",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": 1,
      "max": 245,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
