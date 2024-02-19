import React from "react";
import { useParams } from "react-router-dom";
import BlogCardInterface from "../interface/BlogCardInterface";
import BlogCardData from "../constants/BlogCardData";
import Footer from "../components/Footer";
import { IoIosArrowForward } from "react-icons/io";

export default function Blog() {
  const { id } = useParams();

  const [data, setData] = React.useState<BlogCardInterface>(
    {} as BlogCardInterface
  );

  const [left, setLeft] = React.useState<BlogCardInterface[]>([]);

  React.useEffect(() => {
    const fetchData = BlogCardData.find((blog) => blog.id === parseInt(id));
    const fetchLeft = BlogCardData.filter((blog) => blog.id !== parseInt(id));
    setLeft(fetchLeft);
    setData(fetchData);
  }, [id]);

  return (
    <>
      <div className="bg-white py-10 ">
        <div className="w-11/12 md:w-10/12 mx-auto">
          <a href="/" className="mx-auto my-3 flex justify-end">
            <img
              src={require("../assets/navlogo.svg").default}
              alt="Design Elementary"
              width={200}
              height={16}
            />
          </a>
          <div
            className={` ${
              left && left.length > 0 ? "md:flex" : "mx-auto"
            } w-full justify-between h-fit items-start `}
          >
            <div
              className={
                left && left.length > 0 ? "md:w-[65%] w-full" : "mx-auto"
              }
            >
              {data.id && (
                <>
                  <p id="title">{data.title}</p>
                  {data.imgmain && (
                    <img
                      src={data.imgmain}
                      alt={data.title}
                      className="w-full my-8 h-[70vh] object-cover"
                    />
                  )}
                  <div>
                    {data.date && <p id="date">{data.date}</p>}
                    <div className="my-2 w-full">
                      {data.shortdescription.map((desc, index) => {
                        return (
                          <p className="text-justify" key={index}>
                            {desc}
                          </p>
                        );
                      })}
                    </div>
                    <div id="desc text-[18px]">
                      {data.desc.map((desc, index) => {
                        return (
                          <div className="" key={index}>
                            {desc.head && <p className="head">{desc.head}</p>}
                            {desc.imgofpara && (
                              <img
                                src={desc.imgofpara}
                                alt={desc.head}
                                className="w-full my-8 h-[400px] object-cover"
                              />
                            )}
                            {desc.type === "bullet" ? (
                              <div className="my-10 w-full">
                                <ul>
                                  {desc.text.map((data, index) => {
                                    return (
                                      <li className="my-8 mx-4" key={index}>
                                        {data}
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            ) : desc.type === undefined ? (
                              <>
                                {desc.text.map((data, index) => {
                                  return (
                                    <p
                                      className="my-8 text-justify"
                                      key={index}
                                    >
                                      {data}
                                    </p>
                                  );
                                })}
                              </>
                            ) : null}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="relative w-[30%] mt-8 h-auto hidden md:block">
              {left && (
                <>
                  <div className="divider divider-horizontal"></div>
                  <div className="sticky top-5">
                    {left.map((blog, index) => {
                      return (
                        <div className="my-3 block" key={index}>
                          <div className="w-full  my-2 mx-auto border border-[#d3cece] rounded-[40px] text-black">
                            <img
                              src={blog.imgmain}
                              width={320}
                              height={200}
                              alt={blog.title}
                              className="w-11/12 mx-auto mt-4 rounded-t-3xl"
                            />
                            <p className="text-[18px] font-semibold py-3 px-8">
                              {blog.title}
                            </p>
                            {blog.date && (
                              <div className="flex justify-between items-center py-6 px-8 ">
                                <p className="font-semibold">{blog.date}</p>
                                <a
                                  href={`/blogs/${blog.id}`}
                                  className="bg-[#479E82] p-2 rounded-full"
                                >
                                  <IoIosArrowForward className="text-white rounded-full text-3xl" />
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
