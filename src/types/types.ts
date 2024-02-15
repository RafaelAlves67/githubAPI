export type UserProps = {
    avatar_url: string,
    login: string,
    location: string,
    followers: number,
    following: number
}
export type RepoProps = {
    name: string,
    html_url: string,
    language: string,
    stargazers_count: number,
    forks_count: number;
};