import question from "@/data/question";
export const getInterview = (id: number) => {
  return question.filter((item) => item?.tagId === id);
}