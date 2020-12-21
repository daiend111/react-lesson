import * as React from "react";

export const Sandbox: React.FC = () => {
  const msg = 'message2';

  return <>
    { /* 1. JSXというjsの拡張記法(react独自のものでない), DOMのように書ける */ }
    <p>react</p>

    { /* reactでのループ処理 */ }
    <ul>
      {
        [1,2,3,4,5].map((i) => {
            /* 
            * ループでDOMを生成する場合は、必ず `key` をつけてください。
            * DOMの再描画のコストを削減し、パフォーマンスを最適化するために大切です
            */
            return <li key={i}>index: {i}</li>
        })
      }
    </ul>

    <MessageBox message={msg}/>
  </>
};

/*
 * Component = Props(引数)に応じてDOMを出力する関数と思ってOK
 */
type MessageBoxProps = {
  message: string
}

const MessageBox: React.FC<MessageBoxProps> = (props) => {
  return <p>{props.message}</p>
};