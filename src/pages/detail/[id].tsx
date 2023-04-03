import question from "@/data/question";
import {QuestionType} from "@/types/knowledge";
import {useEffect, useMemo, useState} from "react";

// const Component = useMemo(() => getMDXComponent(code), [code])

export default function DetailPage({title, category, level, tagId, _id}: QuestionType) {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleShowAnswer = () => {
    setShowAnswer(true);
  };

  useEffect(() => {
    console.log(title, category, level, tagId, _id);
  }, []);

  return (
    <div className="container max-w-5xl mx-auto">
      <h1>{title}</h1>
      <div>
        <p>{category}</p><span>{level}</span>
      </div>
      {
        !showAnswer && <button onClick={toggleShowAnswer}>查看答案</button>
      }

      {
        showAnswer && <div>答案</div>
      }
    </div>
  );
}


export async function getStaticPaths() {
  const paths = question.map(item => ({
    params: {
      id: String(item?._id)
    }
  }));

  return {
    paths,
    fallback: true
  };
}

export async function getStaticProps({params}: any) {
  const interview = question.find(item => item?._id === (params.id));
  return {
    props: {
      ...interview
    }
  };
}