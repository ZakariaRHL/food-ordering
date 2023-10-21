import api from "../../../api/axios";

export async function _fetchCategories(prop) {
  return await api.get("recipes/complexSearch", {
    params: {
      cuisine: prop,
    },
  });
}
