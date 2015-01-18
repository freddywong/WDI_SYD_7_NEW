#   Mayor.create(name: 'Emanuel', city: cities.first)

puts "Creating some seed statuses"
Status.create({
  username: "Freddy",
  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem voluptate placeat quis, ratione omnis maxime dicta quas, earum magnam veniam cum aspernatur officiis. Quae in, a laboriosam provident sapiente excepturi."
  })

Status.create({
  username: "Daryl",
  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut magnam debitis nesciunt, odio. Similique consequatur optio, ipsum, inventore at dicta quas explicabo maxime natus omnis praesentium! Ad nam ea sint."
  })

Status.create({
  username: "Jimbo",
  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur deleniti inventore, officiis quaerat quae incidunt voluptatem perferendis quasi accusamus! Harum possimus ipsa, reprehenderit quis quo blanditiis vero enim explicabo quam."
  })