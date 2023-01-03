migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9b0nkcuul7b4g7m")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9b0nkcuul7b4g7m")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
})
