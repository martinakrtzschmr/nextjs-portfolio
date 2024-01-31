import React, { ReactNode } from 'react';

interface BlogLayoutProps {
    children: ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
    return (
        <div>
            <h2>Blog Layout</h2>
            <div>
                { children }
            </div>
        </div>
    );
}

export default BlogLayout;