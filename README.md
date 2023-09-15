### Questions and Answers

// Add at least 3 Project features 

Answers:

It is a course registration project. For this project below given three features which can implemented by me.

1. First Features: At first here a header components which will be created in components folder in the src folder and also added it to app.jsx file with the <Header></Header> using for import the header files. This header files can be exported in Header.jsx file components with its function name Header () it's heading title Course Registration will be shown by using h3 tags and it's class name Header can be used for style the header components which can be added in Header folder header.css files.

2. Second features: We can create another components card in components folder and it has two files one is Card.jsx and another is Card.css . Then  we can export the functions called components in Card.jsx folder and it added to the app.jsx file with <Card></Card> which import the cards in app.jsx file. Then we can create a state in Card.jsx files Card () functions like that 

const [allCourses, setAllCourses] = useState([]);

here at first we can create a use state which has two array elements name allCourses and setAllCourses and we can also pass an empty array which is used to stored the array elements.

and we can also create data.json file and collect fake data for API in public folder data.json file.

now we can use the use effect for maintaining the side effects of API data.

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAllCourses(data));
  }, []);

Here fetch("./data.json") used for load the fake data which can be collected by me in public folder data.json files.

Then second  .then((res) => res.json()) use it to pass a response parameter which will be convert it to json files.

Finally .then((data) => setAllCourses(data)); can used a parameter data which will be set with the setAllCourses array elements and show the API full data.

3. Third Features: 

