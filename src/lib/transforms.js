export const renameResultID = (value) => {
  if (!Array.isArray(value)) {
    const result = { ...value, id: value['_id'] };
    delete result['_id'];
    return result;
  }
  return value.map((v) => {
    const result = { ...v, id: v['_id'] };
    delete v['_id'];
    return result;
  });
};
