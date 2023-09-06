import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

const Home = () => {

    // const githubToken = import.meta.env.VITE_GITHUB_TOKEN;

    return (
        <>
            <UserSearch />
            <UserResults />
        </>
    );
};

export default Home;
