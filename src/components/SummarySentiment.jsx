import React, { useState, useEffect, useContext } from "react";
import AddContext from "../context/AddContext";
import styles from "./SummarySentiment.module.css";

const SummarySentiment = (props) => {
  const [response, setResponse] = useState("");
  const addCtx = useContext(AddContext);

  const createPrompt = (data) => {
    let newsFeed = [];
    if (data && data.results) {
      for (const result of data.results) {
        let temp = {};
        if (result.title) {
          temp.title = result.title;
        }
        if (result.link) {
          temp.link = result.link;
        }
        if (result.description) {
          temp.description = result.description;
        }
        newsFeed.push(temp);
      }
    }
    const prompt = {
      messages: [
        {
          role: "system",
          content:
            "Analyse the following news feed about USDJPY and determine whether the news feed is overall 'Bearish', 'Slightly-bearish', 'Neutral', 'Slightly-Bullish' or 'Bullish'. Explain why you arrived at your conclusion.",
        },
        {
          role: "user",
          content: JSON.stringify(newsFeed),
        },
      ],
      model: "mixtral-8x7b-32768",
    };
    return JSON.stringify(prompt);
  };

  const submitPrompt = async () => {
    let newsFeed = props.data;
    if (newsFeed) {
      newsFeed = JSON.parse(newsFeed);

      if (newsFeed.results) {
        const prompt = createPrompt(newsFeed);

        try {
          const res = await fetch(import.meta.env.VITE_GROQ, {
            mode: "cors",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
              Connection: "keep-alive",
            },
            body: prompt,
          });

          if (res.ok) {
            const data = await res.json();
            console.log(data.choices[0].message.content);
            let modifiedData;
            if (
              data.choices &&
              data.choices[0] &&
              data.choices[0].message &&
              data.choices[0].message.content
            ) {
              modifiedData = data.choices[0].message.content.replaceAll(
                "\n",
                " "
              );
            }
            // console.log(modifiedData);
            setResponse(modifiedData);
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    }
  };

  useEffect(() => {
    submitPrompt();
  }, [props.data]);
  return (
    <div>
      {!addCtx.addTopic ? (
        <div className={`card ${styles.card}`}>
          <h5>News Summary and Sentiment:</h5>
          <p>{response}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SummarySentiment;
