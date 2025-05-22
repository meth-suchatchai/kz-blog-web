import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { req, res } = ctx;
    const { cookies } = req;
    
    const response = await fetch("https://api.example.com/user");
    if (response.status !== 200) {
        // Handle error response
        res.writeHead(302, { Location: "/error" });
        res.end();
        return { props: {} }; // Return empty props
    }
    // Check if the user is authenticated
    const token = cookies.token;
    
    if (!token) {
        // Redirect to the login page if not authenticated
        res.writeHead(302, { Location: "/login" });
        res.end();
        return { props: {} }; // Return empty props
    }
    
    // If authenticated, return the props for the page
    return {
        props: {}, // Add any props you want to pass to the page component
    };
}