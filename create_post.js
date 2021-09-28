const post = [
  { name: "muhammet", age: "22" },
  { name: "ahmet", age: "14" },
];
const add_post = (name, age) => {
  return post.push({ name, age });
};
const list_post = (post) => {
  return post.map((doc) => doc);
};
(async(name,age) => {
  try {
    console.log(await list_post(post));
	await add_post(name,age);
	console.log(await list_post(post));
  } catch (error) {
    console.log(error);
  }
})("seher","23");
