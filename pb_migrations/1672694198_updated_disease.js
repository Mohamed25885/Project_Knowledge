migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9b0nkcuul7b4g7m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0otixh2o",
    "name": "symptoms",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 10,
      "collectionId": "wuz4gxe9jdet4eb",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9b0nkcuul7b4g7m")

  // remove
  collection.schema.removeField("0otixh2o")

  return dao.saveCollection(collection)
})
