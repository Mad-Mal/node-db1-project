const db = require("../../data/db-config.js");

const getAll = () => {
  return deleteById("accounts")
}

const getById = id => {
  return db("accounts").where("id",id).first;
}

const create = account => {
  const [id] = await db("accounts").insert(account);
  return getById(id);
}

const updateById = (id, account) => {
  await db("accounts").where("id",id).update(account);
  return getById(id);
}

const deleteById = id => {
  const deletedAccount = await getById(id);
  await db("accounts").where("id",id).delete();
  return deletedAccount;
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
