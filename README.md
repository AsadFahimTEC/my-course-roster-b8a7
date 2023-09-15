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

Then we can use map method for allCourses with course parameter which can contains the api fake 9 data in a loop with 3 elements in return functions and also we can pass the setAllCourses as a props in cart section we can also use styles for each card using classname card home container and info container can show all the cards information like image course name credit price details and select button can also access the data dynamically shown all the cards left side in the web browers.

3. Third Features:  We can create another components cart in components folder and it has two files one is Cart.jsx and another is Cart.css . Then  we can export the functions called components in Card.jsx folder return function and it  with <Cart></Cart> which import the carts in Card.jsx file. Now we can use handleSelectCourse function to find the selectedAllCourses element if it is exist can use a forEach loop which can pass a parameter item which can calculated the count of select button each elements and shows dynamically in the right side card
   <button
                onClick={() => handleSelectCourse(course)}
                className="card-btn"
              >
                Select
              </button>

here he can use a button in Card.jsx return function which can contains the name Select with onClick that can holds the arrow function () => with manage the course parameter set to the handleSelectCourse function when we click the Select button.

  we can used all the course name in h4 tags <h4>Course Name</h4> also we can  {selectedAllCourses.map((course, index) => (
        <li className="list" key={index + 1}>
          {course.name}
        </li>
      ))}

      map the selectedAllCourses with passing the course parameter which can contains the selected button course name dynamically in an order list by using {course.name} here name propety can access the name of all courses in cart section.


// Discuss how you managed the state in your assignment project.

Answers:

here i can use the four state given below

 const [allCourses, setAllCourses] = useState([]);
  const [selectedAllCourses, setSelectedAllCourses] = useState([]);
  const [remainingCredit, setCreditRemaining] = useState(20);
  const [totalCredit, setTotalCredit] = useState([0]);

  first state can set be allCourses which can be set in setAllCourses for managing the API all data shown in card and also cart section can contains the Select button click for showing course name dynamically on the right side in a ordered list and all data information shown in 9 cards in the left side.

  then second state can be used two array elements named selectedAllCourses and setSelectedAllCourses where selectedAllCourses can be used in handleSelectCourse function which can pass the parameter course and we can create a variable name isExist 

  const isExist = selectedAllCourses.find((item) => item.id === course.id);

  which can use a method find with the selectedAllCourses elements with passing a parameter item with an arrow function which will be set to check the item id will be equal to course id 

   if (isExist) {
      return swal("Opps, Sorry!", "Alreay Added", "error");

      if the condition is true it will return the elements otherwise when we click on the same elements it will show an sweetAlert

      then we can use the third state

    const [remainingCredit, setCreditRemaining] = useState(20);

    where we can use two array elements named remainingCredit, setCreditRemaining which can be set to the useState to shown the default value 20 as Credit Hour Remaining in the cart section.

    now 
    let count = course.credit;

    we can use the count variables intializatioin which can store the fake data Credit as set to be course.credit

    } else {
      selectedAllCourses.forEach((item) => {
        count = count + item.credit;
      });

then we can use the forEach with item parameter which will be loop to stores credit of course in the count variable and also adding with count.

      if (count > 20) {
        return swal("Sorry!", "Your Credit is Limited", "error");
      } 

     here if count will be greater than 20 it will show an sweetalert 
     and we can also set the count setTotalCredit and also passes totalCredit={totalCredit} as a props in return function card and it can also receive by Cart function in Card.jsx files and we can use a h5 tags with <h5>Total Credit Hour: {totalCredit}</h5> passing the totalCredit as a props with curley brackets to shown the total Credit of the course dynamically in cart section.

     Finally we can use the fourth state also it will be set to 
      const totalRemaining = 20 - count;

      totalRemaining which will be minus from 20 because our default value is set to be 20 in useState.


      here the setCreditRemaining(totalRemaining); totalRemaining will be set to the setCreditRemaining array elements. 
      
      else {
        setTotalCredit(count);
        setCreditRemaining(totalRemaining);
        setSelectedAllCourses([...selectedAllCourses, course]); // here all the course will be copy with ... spread operator and set to the course for when we can select one element it will be show the total credit hour now we can select another element then it will put the sum of two elements which can be shown dynamically in the cart section total credit hour.
      }
    }

    and we can also pass remainingCredit={remainingCredit} in the cart of Card.jsx and also it can receive by the Cart function in the Cart.jsx file which can be destructing the remainingCredit as like previous selectedAllCourses and totalCredit.

    Further that we can use <h3>Credit Hour Remaining {remainingCredit} hr </h3> h3 tags for shown the Credit Hour Remaining with the props
    {remainingCredit} dynamically which initial value is 20 and total credit initial value is 0. when we select a course by Clicking select button total credit hour is shown the total credit hour and when we click another course it will be sum the two courses as shown in total credit hour and Credit Hour Remaining shows the credit value of course which will be minus from total credit hours.When we can select more than 20 hours then credit hour remaining show 0 hours and total credit hours show 20 and if we click on any course then it will be show an alert because we can use credit of course more than 20.

    That's how i can manage all the state for dynamically shown fake API data in the card section on the left side and cart section with some functionality in right side.
