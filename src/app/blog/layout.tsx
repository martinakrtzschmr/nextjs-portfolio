import React from 'react';
import type { ReactNode } from 'react';

interface BlogLayoutProps {
  children: ReactNode;
}

// { children }:{children:React.ReactNode}
const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
  return (
    <div>
      <h2>Blog Layout</h2>
      <div>{children}</div>
    </div>
  );
};

export default BlogLayout;
