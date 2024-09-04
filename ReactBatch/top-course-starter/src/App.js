import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './components/Navbar'
import Filters from './components/Filters'
import Cards from './components/Cards'
import { apiUrl, filterData } from "./data";
import Spinner from "./components/Spinner"

const App = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      // output ->
      setCourses(output.data);
    } catch (error) {
      toast.error("Network me koi dikkat hai");
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (<div>
    <div className="min-h-screen flex flex-col">
      <div>
        <Navbar />
      </div>
      <div className="bg-bgDark2">
        <div>
          <Filters category={category} setCategory={setCategory} filterData={filterData} />
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center min-h-[50vh]">
          {
            loading ? (<Spinner />) : (<Cards courses={courses} />)
          }
        </div>
      </div>
    </div>
  </div>);
};

export default App;
