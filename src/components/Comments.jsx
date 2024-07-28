"use client";

import { useEffect, useState } from "react";
import {
  collection,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import Comment from "./Comment.jsx";
import { app } from "@/firebase.js";

export default function Comments({ id }) {
  const db = getFirestore(app);
  const [comments, setComments] = useState([]);

  //   useEffect(() => {
  //     const commentsQuery = query(
  //       collection(db, "posts", id, "comments"),
  //       orderBy("timestamp", "desc")
  //     );
  //     console.log(commentsQuery);

  //     const unsubscribe = onSnapshot(
  //       commentsQuery,
  //       (snapshot) => {
  //         const commentsData = snapshot.docs.map((doc) => ({
  //           id: doc.id,
  //           ...doc.data(),
  //         }));
  //         setComments(commentsData);
  //         console.log(commentsData);
  //       },
  //       (error) => {
  //         console.error("Error fetching comments:", error);
  //       }
  //     );

  //     // Cleanup subscription on unmount
  //     return () => unsubscribe();
  //   }, [db, id]);

  //   console.log(comments);

  useEffect(() => {
    onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => {
        setComments(snapshot.docs);
      }
    );
  }, [db, id]);

  return (
    <div>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment.data()}
          commentId={comment.id}
          originalPostId={id}
        />
      ))}
    </div>
  );
}
