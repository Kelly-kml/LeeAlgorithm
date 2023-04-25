/**
 * @description https://leetcode.cn/problems/longest-word-in-dictionary/
 * @param {string[]} words
 * @return {string}
 */
// 字典法
// 思路：
// （1）创建字典树，遍历数组 words，并将每个单词插入字典树。
// （2）当所有的单词都插入字典树之后，将答案初始化为空字符串，
// （3）再次遍历数组 words，判断每个单词是否是符合要求的单词，并更新答案。
// （4）如果一个单词是符合要求的单词，则比较当前单词与答案，如果当前单词的长度大于答案的长度，或者当前单词的长度等于答案的长度且当前单词的字典序小于答案的字典序，则将答案更新为当前单词。
var longestWord = function (words) {
  const trie = new Trie()
  for (const word of words) {
    trie.insert(word)
  }
  let longest = ""
  for (const word of words) {
    if (trie.search(word)) {
      if (word.length > longest.length || (word.length === longest.length && word.localeCompare(longest) < 0)) {
        longest = word
      }
    }
  }
  return longest
}

// 建立字典类
class Node {
  constructor() {
    this.children = {}
    this.isEnd = false
  }
}

// 类的实例以及实例的方法
class Trie {
  constructor() {
    this.children = new Node()
    this.inEnd = false
  }

  insert (word) {
    let node = this
    for (let i = 0; i < word.length; i++) {
      const ch = word[i]
      const index = ch.charCodeAt() - 'a'.charCodeAt()
      if (!node.children[index]) {
        node.children[index] = new Node()
      }
      node = node.children[index]
    }
    node.isEnd = true
  }

  search (word) {
    let node = this
    for (let i = 0; i < word.length; i++) {
      const ch = word[i]
      const index = ch.charCodeAt() - 'a'.charCodeAt()
      if (!node.children[index] || !node.children[index].isEnd) {
        return false
      }
      node = node.children[index]
    }
    return node && node.isEnd
  }
}





// 哈希表法
// 思路： 
// （1）先将words排序
// （2）建立一个哈希表，先传入空字符
// （3）遍历每一个字符串，比较每个字符串中含有相同字符，如果有，将其add入哈希表中，并且该字符串就是要求的最长单词
var longestWord = function (words) {
  words.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length
    } else {
      return b.localeCompare(a)
    }
  })
  let longest = ""
  let candidates = new Set()
  candidates.add("")
  const n = words.length
  for (let i = 0; i < n; i++) {
    const word = words[i]
    if (candidates.has(word.slice(0, word.length - 1))) {
      candidates.add(word)
      longest = word
    }
  }
  return longest
}