

export interface Knowledge {
  id: number
  tagName: string
  // tagName: string
  icon: string
}

export interface QuestionType {
  "_id": string,
  "category": string,
  "renderType": string,
  "title": string,
  "desc": null|string,
  "options": null|string,
  "explanation": string
  "level": number,
  "tagId": number
}