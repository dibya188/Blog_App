import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About</h2>
        <p>
          Your broad strategic goals will help you figure out what you’re going
          to write about, who your audience is, and how you’re going to get in
          front of them. Plus, knowing what your motivation is will keep you
          going when the going gets tough and the grind starts to set in. Pro
          tip: If you’re personally motivated to create content about the niche
          you’ve chosen (and toward the goals you have), then you’ll be able to
          write faster, more coherent content for your audience.
        </p>
        <p>
          Blogging refers to the act of creating and maintaining an online
          journal or informational website, commonly known as a blog. It
          involves regularly publishing written content, often in a
          chronological order, on a specific topic or a variety of subjects.
          Blogging allows individuals or organizations to share their thoughts,
          knowledge, experiences, and expertise with a wider audience.
        </p>
        <p>
          All content is not created equal. Some content will go viral,
          generating tons of hot traffic to your blog, while other content will
          be lost in the archives. If you want more of the first kind, you’ve
          got to put your readers firs
        </p>
        <p>
          Taking that first step can be hard, but what you’ll find is that the
          next one will be easier, as will the one after that, and the one after
          that. The main difference between the greats and everyone else is that
          the greats took that first step.
        </p>
        <p>
          Your broad strategic goals will help you figure out what you’re going
          to write about, who your audience is, and how you’re going to get in
          front of them. Plus, knowing what your motivation is will keep you
          going when the going gets tough and the grind starts to set in. Pro
          tip: If you’re personally motivated to create content about the niche
          you’ve chosen (and toward the goals you have), then you’ll be able to
          write faster, more coherent content for your audience
        </p>
      </div>
    </article>
  );
};

export default About;
