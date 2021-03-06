"use strict";

import { Lang } from "./lang";

type LangMap = { [lang in Lang]: string };
type MessageMap = { [key in keyof typeof messages]: LangMap };

const messages = {
  Q_NameEn: {
    en: "Input your plugin name in English [1-64chars]",
    ja: "プラグインの英語名を入力してください [1-64文字]"
  },
  Q_NameEnError: {
    en: "Plugin name must be 1-64chars",
    ja: "プラグイン名は1〜64文字で入力してください"
  },
  Q_DescriptionEn: {
    en: "Input your plugin description in English [1-200chars]",
    ja: "プラグインの説明を入力してください [1-200文字]"
  },
  Q_DescriptionEnError: {
    en: "Plugin description must be 1-200chars",
    ja: "プラグインの説明は1〜200文字で入力してください"
  },
  Q_SupportJa: {
    en: "Does your plugin support Japanese?",
    ja: "日本語をサポートしますか？"
  },
  Q_NameJa: {
    en: "Input your plugin name in Japanese [1-64chars] (Optional)",
    ja: "プラグインの日本語名を入力してください [1-64文字] (省略可)"
  },
  Q_NameJaError: {
    en: "Plugin name must be within 64chars",
    ja: "プラグイン名は64文字以内で入力してください"
  },
  Q_DescriptionJa: {
    en: "Input your plugin description in Japanese [1-200chars] (Optional)",
    ja: "プラグインの日本語の説明を入力してください [1-200文字] (省略可)"
  },
  Q_DescriptionJaError: {
    en: "Plugin description must be within 64chars",
    ja: "プラグインの日本語の説明を64文字以内で入力してください"
  },
  Q_SupportZh: {
    en: "Does your plugin support Chinese?",
    ja: "中国語をサポートしますか？"
  },
  Q_NameZh: {
    en: "Input your plugin name in Chinese [1-64chars] (Optional)",
    ja: "プラグインの中国語名を入力してください [1-64文字] (省略可)"
  },
  Q_NameZhError: {
    en: "Plugin name must be within 64chars",
    ja: "プラグイン名は64文字以内で入力してください"
  },
  Q_DescriptionZh: {
    en: "Input your plugin description in Chinese [1-200chars] (Optional)",
    ja: "プラグインの中国語の説明を入力してください [1-200文字] (省略可)"
  },
  Q_DescriptionZhError: {
    en: "Plugin description must be within 64chars",
    ja: "プラグインの中国語の説明を64文字以内で入力してください"
  },
  Q_websiteUrlEn: {
    en: "Input your home page url for English (Optional)",
    ja: "プラグインの英語のWebサイトURLを入力してください (省略可)"
  },
  Q_websiteUrlJa: {
    en: "Input your home page url for Japanese (Optional)",
    ja: "プラグインの日本語のWebサイトURLを入力してください (省略可)"
  },
  Q_websiteUrlZh: {
    en: "Input your home page url for Chinese (Optional)",
    ja: "プラグインの中国語のWebサイトURLを入力してください (省略可)"
  },
  Q_MobileSupport: {
    en: "Does your plugin support mobile views?",
    ja: "モバイルページをサポートしますか？"
  },
  Q_enablePluginUploader: {
    en: "Do you use @kintone/plugin-uploader?",
    ja: "@kintone/plugin-uploaderを使いますか？"
  },
  installDependencies: {
    en: "Installing dependencies...",
    ja: "依存ライブラリをインストールします"
  },
  introduction: {
    en: `
Please answer some questions to create your kintone plugin project :)
Let's start!
    `,
    ja: `
kintoneプラグインのプロジェクトを作成するために、いくつかの質問に答えてください :)
では、はじめましょう！
`
  },
  npmStart: {
    en:
      "Start the process watching file changes and create a kintone plugin zip.",
    ja:
      "ファイルの変更を監視してプラグインのzipを自動的に作成するプロセスを起動します"
  },
  npmStartWithPluginUploader: {
    en:
      "And then, the plugin zip is uploaded automatically by @kintone/plugin-uploader.",
    ja:
      "その後、@kintone/plugin-uploaderにより、プラグインのzipは自動的にアップロードされます"
  },
  npmBuild: {
    en: "Create a kintone plugin zip.",
    ja: "プラグインのzipを作成します"
  },
  npmLint: {
    en: "Lint js files with ESLint.",
    ja: "ESLintを使ってJavaScriptのソースコードをチェックします"
  },
  nextAction: {
    en: "Try the following commands",
    ja: "まずは次のコマンドを実行してください"
  },
  howToUsePluginUploader: {
    en: "And then, please input your information for kintone account",
    ja: "その後、あなたのkintone環境の情報を入力してください"
  },
  lastMessage: {
    en: "Enjoy Hacking kintone plugin!",
    ja: "kintoneプラグイン開発をはじめましょう！"
  },
  developerSite: {
    en: "",
    ja: `開発に関する情報はcybozu developer network:

  https://developer.cybozu.io
`
  },
  Error_alreadyExists: {
    en: "already exists so please choose an other directory",
    ja: "はすでに存在しています。削除するか、別のディレクトリを指定してください"
  },
  Error_cannotCreatePlugin: {
    en: "Can't create a plugin project! Error:",
    ja: "プラグインの作成に失敗しました。 エラー:"
  }
};

/**
 * Returns a message for the passed lang and key
 * @param lang
 * @param key
 */
export function getMessage(lang: keyof LangMap, key: keyof MessageMap): string {
  return messages[key][lang];
}

/**
 * Returns a function bound lang to getMessage
 * @param lang
 */
export function getBoundMessage(
  lang: keyof LangMap
): (key: keyof MessageMap) => string {
  return getMessage.bind(null, lang);
}
