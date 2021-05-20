import React, { useState, useEffect, Fragment } from 'react';
import { LocalApi } from '../../api/api';
import axios from 'axios';
import format from 'date-fns/format';
import './index.scss';
const ConnnectTest = (props) => {
  const [addUserInfo, setAddUserInfo] = useState({});
  const [userList, setUserList] = useState([]);
  const [userComment, setUserComment] = useState([]);
  const [choicedUser, setChoicedUser] = useState(null);
  const [inputComment, setInputComment] = useState('');
  const [isUpdate, setIsUpdate] = useState(null);
  const addUser = async (e) => {
    e.preventDefault();
    await axios.post(LocalApi, {
      name: addUserInfo.name,
      age: Number(addUserInfo.age),
      married: Number(addUserInfo.married),
    });
    getUserData();
  };

  const onChangeAddUser = (e) => {
    const { name, value } = e.target;
    setAddUserInfo({ ...addUserInfo, [name]: value });
  };

  const onClickUser = async (e) => {
    const { data } = await axios.get(`${LocalApi}/${e}/comments`);
    setUserComment(data);
    setChoicedUser(e);
    setInputComment('');
  };

  const postComment = async () => {
    const { data: res } = await axios.post(`${LocalApi}/comments`, {
      comment: inputComment,
      commenter: choicedUser,
    });
    const newData = await axios.get(`${LocalApi}/${res.commenter}/comments`);
    setUserComment(newData.data);
    setChoicedUser(res.commenter);
    setInputComment('');
  };
  async function getUserData() {
    const { data } = await axios.get(LocalApi);
    setUserList(data);
  }

  const activateUpdate = ({ comment, id }) => {
    setIsUpdate({ comment, id });
    userComment.forEach((elem) => {
      if (elem.id === id) {
        elem.status = 'updating';
      } else {
        delete elem.status;
      }
    });
    setUserComment(userComment);
  };

  const postUpdateComment = async (commenterId) => {
    const { comment, id } = isUpdate;
    const result = await axios.patch(`${LocalApi}/comments/${isUpdate.id}`, {
      comment,
      id,
    });
    const { data } = await axios.get(`${LocalApi}/${commenterId}/comments`);
    setUserComment(data);
    setIsUpdate(null);
  };

  const onClickDelete = async (commenterId, commentId) => {
    await axios.delete(`${LocalApi}/comments/${commentId}`);
    const { data } = await axios.get(`${LocalApi}/${commenterId}/comments`);
    setUserComment(data);
  };

  useEffect(() => {
    getUserData();
  }, []);
  console.log(props);
  return (
    <div>
      <div onClick={() => props.history.push('/saga')}>이동</div>
      <form onSubmit={addUser}>
        <div>사용자 등록</div>
        <input name='name' onChange={onChangeAddUser} placeholder='이름' />
        <input name='age' onChange={onChangeAddUser} type='number' placeholder='나이' />
        <span>결혼유무</span>
        <input name='married' type='radio' onChange={onChangeAddUser} value={0} />
        <label htmlFor={0}>유</label>
        <input name='married' type='radio' onChange={onChangeAddUser} value={1} />
        <label htmlFor={1}>무</label>
        <button type='submit'>전송</button>
      </form>
      <hr />
      <div className='user-list-card'>
        <h3>유저</h3>
        {userList.map((user, idx) => {
          return (
            <div className='user-wrapper' key={idx} onClick={() => onClickUser(user.id)}>
              <div className='user-name'>{user.name}</div>
              <div className='user-age'>{user.age}</div>
              <div className='user-married'>{user.married ? '유' : '무'}</div>
            </div>
          );
        })}
        <h3>댓글</h3>
        {userComment.map((comment, idx) => {
          return (
            <div className='comment-wrapper' key={idx}>
              <div className='user-name'>{comment.User.name}</div>
              {comment?.status === 'updating' ? (
                <input
                  className='user-comment'
                  value={isUpdate.comment}
                  onChange={(e) => setIsUpdate({ ...isUpdate, comment: e.target.value })}
                />
              ) : (
                <div className='user-comment'>{comment.comment}</div>
              )}
              <div className='comment-date'>
                {format(new Date(comment.created_at), 'yyyy/MM/dd hh:mm')}
              </div>
              <div className='comment-update'>
                {comment?.status === 'updating' ? (
                  <button onClick={() => postUpdateComment(comment.commenter)}>수정완료</button>
                ) : (
                  <button
                    onClick={() => activateUpdate({ comment: comment.comment, id: comment.id })}
                  >
                    수정
                  </button>
                )}
              </div>
              <div className='comment-delete'>
                <button
                  style={{ marginLeft: 10 }}
                  onClick={() => onClickDelete(comment.commenter, comment.id)}
                >
                  삭제
                </button>
              </div>
            </div>
          );
        })}
        {choicedUser && (
          <Fragment>
            <h3>리플남기기</h3>
            <input
              name='comment'
              className='comment-input'
              onChange={(e) => setInputComment(e.target.value)}
              value={inputComment}
            />
            <button onClick={postComment}>등록</button>
          </Fragment>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default ConnnectTest;
