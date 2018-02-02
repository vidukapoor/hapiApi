export let hello = (request, h) => {
  console.log("request", request.query);
  const name = request.query.name ? encodeURIComponent(request.query.name) : 'World';
  return 'Hello, ' + name;
};