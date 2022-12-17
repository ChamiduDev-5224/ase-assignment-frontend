import React, { useEffect, useState } from "react";
import { Table, Button } from "flowbite-react";
import deleteIcon from "../../assets/icons/delete-icon.svg";
import editIcon from "../../assets/icons/edit-icon.svg";
import starIcon from "../../assets/icons/star.svg";
import closeStarIcon from "../../assets/icons/starred.svg";
import axios from "axios";
import Header from "../header/Header";
function Allproduct() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://results-api.pasindujr.me/api/v1/students")
      .then((res) => setData(res.data.data));
  }, []);
  return (
    <div>
      <div className="py-8">
        <Header />
      </div>
      <div className=" product__header p-10 text-2xl">
        <p>products</p>
      </div>
      <div className="mt-3">
        <form className="search__form px-10 flex flex-row">
          <label
            for="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className=" relative w-1/3">
            <input
              type="search"
              id="default-search"
              className="search__field block w-full p-4 pl-10 text-sm text-trueGray-100 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for products"
              required
            />
            <button
              type="submit"
              className="search__submit__button text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
          <div className="button__section">
            <div className="flex flex-wrap gap-2 ">
              <div>
                <Button>New Product</Button>
              </div>
              <div>
                <button
                  type="button"
                  class="text-gray-900 bg-white border border-blue-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  <img src={closeStarIcon} alt="star" width={20} />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="text-center m-10 ">
        <Table>
          <Table.Head className="all__product__table">
            <Table.HeadCell>SKU</Table.HeadCell>
            <Table.HeadCell>IMAGE</Table.HeadCell>
            <Table.HeadCell>PRODUCT NAME</Table.HeadCell>
            <Table.HeadCell>PRICE</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y ">
            {data?.map((students, index) => {
              return (
                <Table.Row
                  className="bg-white dark:border-gray-700 dark:bg-gray-800 "
                  key={index}
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-trueGray-100 dark:text-white">
                    {students.name}
                  </Table.Cell>
                  <Table.Cell className="text-gray-800">
                    {students.email}
                  </Table.Cell>
                  <Table.Cell className="text-gray-800">
                    {students.registrationNumber}
                  </Table.Cell>
                  <Table.Cell className="text-gray-800">
                    {students.birthYear}
                  </Table.Cell>
                  <Table.Cell className="text-gray-800">
                    <div className="flex flex-wrap gap-1 ">
                      <div>
                        <img
                          className="cursor-pointer"
                          src={deleteIcon}
                          alt="delete-button"
                          width={20}
                        />
                      </div>
                      <div>
                        <img
                          className="cursor-pointer"
                          src={editIcon}
                          alt="delete-button"
                          width={20}
                        />
                      </div>
                      <div>
                        <img
                          className="cursor-pointer"
                          src={starIcon}
                          alt="delete-button"
                          width={20}
                        />
                      </div>
                    </div>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}

export default Allproduct;
