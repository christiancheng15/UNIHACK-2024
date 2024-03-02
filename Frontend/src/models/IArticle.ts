export default interface IArticle {
    id: number,
    title: string,
    link: string,
    author?: string | undefined,
    summarised_text: string[],
    date: Date,
    image_url: string,
    source_id: number,
    source_url: string,
    source_icon: string,
    category: string,
    isSaved?: boolean | undefined
}