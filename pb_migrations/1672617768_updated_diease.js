migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9b0nkcuul7b4g7m")

  collection.name = "disease"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9b0nkcuul7b4g7m")

  collection.name = "diease"

  return dao.saveCollection(collection)
})
