import {KnowledgeList} from "@/data/knowledgeData";
import {getInterview} from "@/lib/utls";
import {Knowledge,QuestionType} from "@/types/knowledge";

export default function Interview({interviewList}:any) {

  return (
    <>
      <ul>
        {
          interviewList.map((item:QuestionType)=>(
            <li>{item.title}</li>
          ))
        }
      </ul>
    </>
  );
}

export async function getStaticPaths() {
  // const paths = await getInterviews();
  const paths = KnowledgeList.map(item=>({
    params: {
      id: String(item.id)
    }
  }))
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({params}:any) {
  // const interview = await getInterview(params.id);
  const interviewList = getInterview(Number(params.id));

  return {
    props: {
      interviewList
    }
  }
}