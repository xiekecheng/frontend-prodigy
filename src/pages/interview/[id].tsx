import {KnowledgeList} from "@/data/knowledgeData";
import {getInterview} from "@/lib/utls";
import {QuestionType} from "@/types/knowledge";
import {InterviewItem} from "@/components/InterviewItem";

export default function Interview({interviewList}: any) {

  return (
    <>
      <div className='container max-w-5xl mx-auto mt-20'>
        <ul>
          {
            interviewList.map((item: QuestionType) => (
              <li key={item._id}>
                <InterviewItem {...item} />
              </li>
            ))
          }
        </ul>
      </div>

    </>
  );
}

export async function getStaticPaths() {
  // const paths = await getInterviews();
  const paths = KnowledgeList.map(item => ({
    params: {
      id: String(item.id)
    }
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({params}: any) {
  // const interview = await getInterview(params.id);
  const interviewList = getInterview(Number(params.id));

  return {
    props: {
      interviewList
    }
  };
}