import React from 'react';
import { Prompt } from 'react-router-dom';
const RouteTest = (props) => {
  const { history } = props;
  const testArr = [
    {
      name: 'youngjun',
      tall: 187,
      position: 'developer',
      sex: 'M',
    },
    {
      name: 'yonghoo',
      tall: 170,
      position: 'manager',
      sex: 'W',
    },
    {
      name: 'jewon',
      tall: 173,
      position: 'employee',
      sex: 'M',
    },
  ];
  function testReduce() {
    let initialValue = {};

    let value = testArr.reduce((result, current) => {
      const nameArr = {};
      testArr.forEach((item) => {
        nameArr[item.name] = {
          position: item.position,
          sex: item.sex,
          tall: item.tall,
        };
      });
      result = nameArr;
      return result;
    }, initialValue);
    return value;
  }

  function testMap() {
    let value = testArr.map((item) => {
      console.log(item);
      item.additional = '멋진' + item.position;
      return item;
    });
    return value;
  }

  function testFilter(tallSize) {
    let value = testArr.filter((item) => item.tall > tallSize);
    return value;
  }

  // console.log(testMap());
  // console.log(testReduce());
  console.log(testFilter(180));
  return <div></div>;
};

export default RouteTest;
