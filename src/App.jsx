import { useMemo, useState } from 'react'
import './App.css'

const grammarLessons = [
  {
    id: 'verbs',
    stage: '기초',
    title: '동사',
    subtitle: '문장의 움직임과 상태를 말하는 핵심 단어',
    summary:
      '동사는 주어가 무엇을 하는지, 어떤 상태인지 알려준다. 영어 문장은 대부분 주어와 동사를 중심으로 만들어진다.',
    rules: ['be동사는 상태를 말한다.', '일반동사는 행동을 말한다.', '주어와 시제에 따라 동사 모양이 바뀐다.'],
    examples: [
      {
        level: '쉬움',
        en: 'I study English every day.',
        ko: '나는 매일 영어를 공부한다.',
        pairs: [
          { en: 'I', ko: '나는' },
          { en: 'study', ko: '공부한다' },
          { en: 'English', ko: '영어를' },
        ],
      },
      {
        level: '보통',
        en: 'She is tired after school.',
        ko: '그녀는 학교 후에 피곤하다.',
        pairs: [
          { en: 'She', ko: '그녀는' },
          { en: 'is tired', ko: '피곤하다' },
          { en: 'after school', ko: '학교 후에' },
        ],
      },
      {
        level: '보통',
        en: 'My brother plays soccer on weekends.',
        ko: '내 남동생은 주말마다 축구를 한다.',
        pairs: [
          { en: 'My brother', ko: '내 남동생은' },
          { en: 'plays', ko: '한다' },
          { en: 'soccer', ko: '축구를' },
          { en: 'on weekends', ko: '주말마다' },
        ],
      },
    ],
  },
  {
    id: 'be-verbs',
    stage: '중1',
    title: 'be동사',
    subtitle: 'am, are, is로 상태와 존재를 표현',
    summary:
      'be동사는 주어의 상태, 성격, 위치, 존재를 설명한다. 현재형은 am, are, is를 주어에 맞게 고른다.',
    rules: ['I는 am을 쓴다.', 'you, we, they는 are를 쓴다.', 'he, she, it과 단수명사는 is를 쓴다.'],
    examples: [
      {
        level: '쉬움',
        en: 'I am ready.',
        ko: '나는 준비가 되었다.',
        pairs: [
          { en: 'I', ko: '나는' },
          { en: 'am ready', ko: '준비가 되었다' },
        ],
      },
      {
        level: '보통',
        en: 'They are in the classroom.',
        ko: '그들은 교실 안에 있다.',
        pairs: [
          { en: 'They', ko: '그들은' },
          { en: 'are', ko: '있다' },
          { en: 'in the classroom', ko: '교실 안에' },
        ],
      },
      {
        level: '보통',
        en: 'The answer is simple.',
        ko: '그 답은 간단하다.',
        pairs: [
          { en: 'The answer', ko: '그 답은' },
          { en: 'is simple', ko: '간단하다' },
        ],
      },
    ],
  },
  {
    id: 'tenses',
    stage: '중1',
    title: '시제',
    subtitle: '현재, 과거, 미래로 시간을 표시',
    summary:
      '시제는 행동이 언제 일어나는지 보여준다. 현재는 습관과 사실, 과거는 끝난 일, 미래는 앞으로의 일을 말한다.',
    rules: ['현재시제는 반복되는 습관에 자주 쓴다.', '과거시제는 동사의 과거형을 쓴다.', '미래는 will 또는 be going to를 쓴다.'],
    examples: [
      {
        level: '쉬움',
        en: 'He drinks milk every morning.',
        ko: '그는 매일 아침 우유를 마신다.',
        pairs: [
          { en: 'He', ko: '그는' },
          { en: 'drinks', ko: '마신다' },
          { en: 'every morning', ko: '매일 아침' },
        ],
      },
      {
        level: '보통',
        en: 'We watched a movie last night.',
        ko: '우리는 어젯밤 영화를 보았다.',
        pairs: [
          { en: 'We', ko: '우리는' },
          { en: 'watched', ko: '보았다' },
          { en: 'last night', ko: '어젯밤' },
        ],
      },
      {
        level: '보통',
        en: 'I will call you tomorrow.',
        ko: '나는 내일 너에게 전화할 것이다.',
        pairs: [
          { en: 'I', ko: '나는' },
          { en: 'will call', ko: '전화할 것이다' },
          { en: 'you', ko: '너에게' },
          { en: 'tomorrow', ko: '내일' },
        ],
      },
    ],
  },
  {
    id: 'questions-negatives',
    stage: '중1',
    title: '의문문과 부정문',
    subtitle: '질문과 아니라고 말하는 문장',
    summary:
      'be동사는 앞으로 보내서 질문을 만들고, 일반동사는 do, does, did를 사용한다. 부정문은 not을 넣어 만든다.',
    rules: ['be동사 의문문은 be동사를 주어 앞에 둔다.', '일반동사 의문문은 do, does, did를 앞에 둔다.', '부정문은 not 또는 축약형을 쓴다.'],
    examples: [
      {
        level: '쉬움',
        en: 'Are you hungry?',
        ko: '너는 배고프니?',
        pairs: [
          { en: 'Are', ko: '니' },
          { en: 'you', ko: '너는' },
          { en: 'hungry', ko: '배고프' },
        ],
      },
      {
        level: '보통',
        en: 'She does not like coffee.',
        ko: '그녀는 커피를 좋아하지 않는다.',
        pairs: [
          { en: 'She', ko: '그녀는' },
          { en: 'does not like', ko: '좋아하지 않는다' },
          { en: 'coffee', ko: '커피를' },
        ],
      },
      {
        level: '보통',
        en: 'Did they finish the project?',
        ko: '그들은 그 프로젝트를 끝냈니?',
        pairs: [
          { en: 'Did', ko: '니' },
          { en: 'they', ko: '그들은' },
          { en: 'finish', ko: '끝냈' },
          { en: 'the project', ko: '그 프로젝트를' },
        ],
      },
    ],
  },
  {
    id: 'nouns-articles',
    stage: '중1',
    title: '명사와 관사',
    subtitle: '사람, 사물, 개념 이름과 a, an, the',
    summary:
      '명사는 이름을 나타내고, 관사는 명사 앞에서 하나인지, 특정한 것인지 알려준다.',
    rules: ['셀 수 있는 단수명사 앞에는 a 또는 an이 필요하다.', '이미 아는 대상에는 the를 쓴다.', '복수명사는 보통 -s나 -es를 붙인다.'],
    examples: [
      {
        level: '쉬움',
        en: 'I have a pen.',
        ko: '나는 펜 하나를 가지고 있다.',
        pairs: [
          { en: 'I', ko: '나는' },
          { en: 'have', ko: '가지고 있다' },
          { en: 'a pen', ko: '펜 하나를' },
        ],
      },
      {
        level: '보통',
        en: 'The book on the desk is mine.',
        ko: '책상 위의 그 책은 내 것이다.',
        pairs: [
          { en: 'The book', ko: '그 책은' },
          { en: 'on the desk', ko: '책상 위의' },
          { en: 'is mine', ko: '내 것이다' },
        ],
      },
      {
        level: '보통',
        en: 'There are three boxes near the door.',
        ko: '문 근처에 상자 세 개가 있다.',
        pairs: [
          { en: 'There are', ko: '있다' },
          { en: 'three boxes', ko: '상자 세 개가' },
          { en: 'near the door', ko: '문 근처에' },
        ],
      },
    ],
  },
  {
    id: 'pronouns',
    stage: '중1',
    title: '대명사',
    subtitle: '명사를 대신하는 I, me, my, mine',
    summary:
      '대명사는 반복되는 명사를 대신한다. 문장에서 주어, 목적어, 소유 표현에 따라 모양이 달라진다.',
    rules: ['주격은 주어 자리에 쓴다.', '목적격은 동사나 전치사의 목적어 자리에 쓴다.', '소유격과 소유대명사는 소유를 나타낸다.'],
    examples: [
      {
        level: '쉬움',
        en: 'He knows me.',
        ko: '그는 나를 안다.',
        pairs: [
          { en: 'He', ko: '그는' },
          { en: 'knows', ko: '안다' },
          { en: 'me', ko: '나를' },
        ],
      },
      {
        level: '보통',
        en: 'This is her notebook.',
        ko: '이것은 그녀의 공책이다.',
        pairs: [
          { en: 'This', ko: '이것은' },
          { en: 'her notebook', ko: '그녀의 공책' },
          { en: 'is', ko: '이다' },
        ],
      },
      {
        level: '보통',
        en: 'Their house is bigger than ours.',
        ko: '그들의 집은 우리 집보다 더 크다.',
        pairs: [
          { en: 'Their house', ko: '그들의 집은' },
          { en: 'bigger than', ko: '보다 더 크다' },
          { en: 'ours', ko: '우리 집' },
        ],
      },
    ],
  },
  {
    id: 'adjectives-adverbs',
    stage: '중2',
    title: '형용사와 부사',
    subtitle: '명사와 동사를 더 자세히 설명',
    summary:
      '형용사는 명사를 꾸미고, 부사는 동사, 형용사, 다른 부사, 문장 전체를 꾸민다.',
    rules: ['형용사는 명사 앞이나 be동사 뒤에 온다.', '부사는 행동의 방식, 정도, 시간을 설명한다.', 'many, much, few, little은 수량 표현에 중요하다.'],
    examples: [
      {
        level: '쉬움',
        en: 'This is a clean room.',
        ko: '이것은 깨끗한 방이다.',
        pairs: [
          { en: 'This', ko: '이것은' },
          { en: 'clean', ko: '깨끗한' },
          { en: 'room', ko: '방' },
        ],
      },
      {
        level: '보통',
        en: 'She speaks English clearly.',
        ko: '그녀는 영어를 또렷하게 말한다.',
        pairs: [
          { en: 'She', ko: '그녀는' },
          { en: 'speaks', ko: '말한다' },
          { en: 'English', ko: '영어를' },
          { en: 'clearly', ko: '또렷하게' },
        ],
      },
      {
        level: '보통',
        en: 'The test was quite difficult.',
        ko: '그 시험은 꽤 어려웠다.',
        pairs: [
          { en: 'The test', ko: '그 시험은' },
          { en: 'was', ko: '였다' },
          { en: 'quite difficult', ko: '꽤 어려웠다' },
        ],
      },
    ],
  },
  {
    id: 'prepositions',
    stage: '중2',
    title: '전치사',
    subtitle: '명사 앞에서 시간, 장소, 방향, 관계를 표시',
    summary:
      '전치사는 명사나 대명사 앞에 와서 시간, 위치, 방향, 이유 같은 관계를 만든다. 전치사 뒤에는 보통 명사나 동명사가 온다.',
    rules: ['at은 좁은 지점, in은 공간이나 기간, on은 표면이나 특정 날짜에 자주 쓴다.', 'to는 방향, for는 목적이나 기간, with는 함께함이나 도구를 나타낸다.', '전치사 뒤에 동사가 오면 동명사 형태를 쓴다.'],
    examples: [
      {
        level: '쉬움',
        en: 'The cat is on the table.',
        ko: '그 고양이는 탁자 위에 있다.',
        pairs: [
          { en: 'The cat', ko: '그 고양이는' },
          { en: 'is', ko: '있다' },
          { en: 'on the table', ko: '탁자 위에' },
        ],
      },
      {
        level: '보통',
        en: 'We met at the station in the morning.',
        ko: '우리는 아침에 역에서 만났다.',
        pairs: [
          { en: 'We', ko: '우리는' },
          { en: 'met', ko: '만났다' },
          { en: 'at the station', ko: '역에서' },
          { en: 'in the morning', ko: '아침에' },
        ],
      },
      {
        level: '보통',
        en: 'Thank you for helping me.',
        ko: '나를 도와줘서 고마워.',
        pairs: [
          { en: 'Thank you', ko: '고마워' },
          { en: 'for helping', ko: '도와줘서' },
          { en: 'me', ko: '나를' },
        ],
      },
    ],
  },
  {
    id: 'modals',
    stage: '중2',
    title: '조동사',
    subtitle: '동사 앞에서 가능, 의무, 추측을 더함',
    summary:
      '조동사는 동사 원형 앞에 붙어서 의미를 보조한다. can, may, must, should, would가 자주 쓰인다.',
    rules: ['조동사 뒤에는 동사원형을 쓴다.', 'can은 능력과 가능성을 나타낸다.', 'must와 should는 의무와 조언에 자주 쓴다.'],
    examples: [
      {
        level: '쉬움',
        en: 'I can swim.',
        ko: '나는 수영할 수 있다.',
        pairs: [
          { en: 'I', ko: '나는' },
          { en: 'can swim', ko: '수영할 수 있다' },
        ],
      },
      {
        level: '보통',
        en: 'You should check your answer again.',
        ko: '너는 네 답을 다시 확인해야 한다.',
        pairs: [
          { en: 'You', ko: '너는' },
          { en: 'should check', ko: '확인해야 한다' },
          { en: 'your answer', ko: '네 답을' },
          { en: 'again', ko: '다시' },
        ],
      },
      {
        level: '보통',
        en: 'It may rain this evening.',
        ko: '오늘 저녁에 비가 올지도 모른다.',
        pairs: [
          { en: 'It may rain', ko: '비가 올지도 모른다' },
          { en: 'this evening', ko: '오늘 저녁에' },
        ],
      },
    ],
  },
  {
    id: 'sentence-patterns',
    stage: '중2',
    title: '문장의 5형식',
    subtitle: '주어, 동사, 목적어, 보어의 기본 구조',
    summary:
      '영어 문장은 동사의 성격에 따라 1형식부터 5형식까지 정리할 수 있다. 문장 구조를 알면 해석 순서가 안정된다.',
    rules: ['1형식은 주어와 동사만으로 완성된다.', '2형식은 주어를 설명하는 보어가 온다.', '3, 4, 5형식은 목적어가 중요하다.'],
    examples: [
      {
        level: '쉬움',
        en: 'Birds fly.',
        ko: '새들은 난다.',
        pairs: [
          { en: 'Birds', ko: '새들은' },
          { en: 'fly', ko: '난다' },
        ],
      },
      {
        level: '보통',
        en: 'The soup tastes salty.',
        ko: '그 수프는 짠맛이 난다.',
        pairs: [
          { en: 'The soup', ko: '그 수프는' },
          { en: 'tastes', ko: '맛이 난다' },
          { en: 'salty', ko: '짠' },
        ],
      },
      {
        level: '보통',
        en: 'My teacher made the class interesting.',
        ko: '우리 선생님은 그 수업을 흥미롭게 만들었다.',
        pairs: [
          { en: 'My teacher', ko: '우리 선생님은' },
          { en: 'made', ko: '만들었다' },
          { en: 'the class', ko: '그 수업을' },
          { en: 'interesting', ko: '흥미롭게' },
        ],
      },
    ],
  },
  {
    id: 'conjunctions',
    stage: '중2',
    title: '접속사',
    subtitle: '단어, 구, 절을 연결',
    summary:
      '접속사는 두 정보를 연결한다. and, but, or 같은 등위접속사와 because, when, if 같은 종속접속사가 있다.',
    rules: ['and는 추가, but은 반대, or은 선택을 나타낸다.', 'because는 이유를 말한다.', 'when과 if는 시간과 조건을 이끈다.'],
    examples: [
      {
        level: '쉬움',
        en: 'I like tea and coffee.',
        ko: '나는 차와 커피를 좋아한다.',
        pairs: [
          { en: 'I', ko: '나는' },
          { en: 'like', ko: '좋아한다' },
          { en: 'tea and coffee', ko: '차와 커피를' },
        ],
      },
      {
        level: '보통',
        en: 'I stayed home because I was sick.',
        ko: '나는 아팠기 때문에 집에 있었다.',
        pairs: [
          { en: 'I stayed home', ko: '나는 집에 있었다' },
          { en: 'because', ko: '때문에' },
          { en: 'I was sick', ko: '아팠' },
        ],
      },
      {
        level: '보통',
        en: 'If you practice, you will improve.',
        ko: '네가 연습하면 너는 향상될 것이다.',
        pairs: [
          { en: 'If', ko: '하면' },
          { en: 'you practice', ko: '네가 연습' },
          { en: 'you will improve', ko: '너는 향상될 것이다' },
        ],
      },
    ],
  },
  {
    id: 'comparatives',
    stage: '중2',
    title: '비교급과 최상급',
    subtitle: '더, 가장을 표현',
    summary:
      '비교급은 둘을 비교하고, 최상급은 셋 이상 중 가장 높은 정도를 말한다.',
    rules: ['짧은 형용사는 -er, -est를 붙인다.', '긴 형용사는 more, most를 쓴다.', 'as 원급 as는 만큼이라는 뜻이다.'],
    examples: [
      {
        level: '쉬움',
        en: 'This bag is bigger than that one.',
        ko: '이 가방은 저것보다 더 크다.',
        pairs: [
          { en: 'This bag', ko: '이 가방은' },
          { en: 'bigger than', ko: '보다 더 크다' },
          { en: 'that one', ko: '저것' },
        ],
      },
      {
        level: '보통',
        en: 'Math is more difficult than English for me.',
        ko: '나에게 수학은 영어보다 더 어렵다.',
        pairs: [
          { en: 'Math', ko: '수학은' },
          { en: 'more difficult than', ko: '보다 더 어렵다' },
          { en: 'English', ko: '영어' },
          { en: 'for me', ko: '나에게' },
        ],
      },
      {
        level: '보통',
        en: 'She is the fastest runner in our school.',
        ko: '그녀는 우리 학교에서 가장 빠른 달리기 선수다.',
        pairs: [
          { en: 'She', ko: '그녀는' },
          { en: 'the fastest runner', ko: '가장 빠른 달리기 선수' },
          { en: 'in our school', ko: '우리 학교에서' },
        ],
      },
    ],
  },
  {
    id: 'infinitives-gerunds',
    stage: '중3',
    title: 'to부정사와 동명사',
    subtitle: '동사를 명사, 형용사, 부사처럼 사용',
    summary:
      'to부정사는 to 동사원형이고, 동명사는 동사에 -ing를 붙인다. 둘 다 명사 역할을 할 수 있지만 쓰임이 다르다.',
    rules: ['to부정사는 목적, 예정, 감정의 원인을 말할 수 있다.', '동명사는 주어, 목적어, 전치사 뒤에 자주 온다.', 'enjoy, finish, avoid 뒤에는 동명사가 자연스럽다.'],
    examples: [
      {
        level: '쉬움',
        en: 'I want to learn English.',
        ko: '나는 영어를 배우고 싶다.',
        pairs: [
          { en: 'I', ko: '나는' },
          { en: 'want to learn', ko: '배우고 싶다' },
          { en: 'English', ko: '영어를' },
        ],
      },
      {
        level: '보통',
        en: 'Reading books helps me relax.',
        ko: '책을 읽는 것은 내가 쉬는 데 도움이 된다.',
        pairs: [
          { en: 'Reading books', ko: '책을 읽는 것' },
          { en: 'helps', ko: '도움이 된다' },
          { en: 'me relax', ko: '내가 쉬는 데' },
        ],
      },
      {
        level: '보통',
        en: 'She is happy to meet her friends.',
        ko: '그녀는 친구들을 만나서 기쁘다.',
        pairs: [
          { en: 'She', ko: '그녀는' },
          { en: 'is happy', ko: '기쁘다' },
          { en: 'to meet her friends', ko: '친구들을 만나서' },
        ],
      },
    ],
  },
  {
    id: 'participles',
    stage: '중3',
    title: '분사',
    subtitle: '현재분사와 과거분사로 명사를 꾸밈',
    summary:
      '현재분사는 능동이나 진행 느낌, 과거분사는 수동이나 완료 느낌을 만든다. 명사 앞뒤에서 명사를 설명한다.',
    rules: ['현재분사는 -ing 형태다.', '과거분사는 규칙형 -ed 또는 불규칙 형태다.', '분사는 명사를 꾸미거나 보어로 쓰인다.'],
    examples: [
      {
        level: '쉬움',
        en: 'Look at the sleeping baby.',
        ko: '자고 있는 아기를 봐.',
        pairs: [
          { en: 'Look at', ko: '봐' },
          { en: 'the sleeping baby', ko: '자고 있는 아기를' },
        ],
      },
      {
        level: '보통',
        en: 'The broken window was repaired yesterday.',
        ko: '깨진 창문은 어제 수리되었다.',
        pairs: [
          { en: 'The broken window', ko: '깨진 창문은' },
          { en: 'was repaired', ko: '수리되었다' },
          { en: 'yesterday', ko: '어제' },
        ],
      },
      {
        level: '보통',
        en: 'The girl talking to Tom is my sister.',
        ko: '톰과 이야기하고 있는 그 소녀는 내 여동생이다.',
        pairs: [
          { en: 'The girl', ko: '그 소녀는' },
          { en: 'talking to Tom', ko: '톰과 이야기하고 있는' },
          { en: 'is my sister', ko: '내 여동생이다' },
        ],
      },
    ],
  },
  {
    id: 'passive',
    stage: '중3',
    title: '수동태',
    subtitle: '행동을 당하는 대상을 주어로 세움',
    summary:
      '수동태는 be동사와 과거분사로 만든다. 누가 했는지보다 무엇이 당했는지가 중요할 때 쓴다.',
    rules: ['기본형은 be동사 + 과거분사다.', '행위자는 by 뒤에 쓴다.', '목적어가 없는 자동사는 수동태로 만들기 어렵다.'],
    examples: [
      {
        level: '쉬움',
        en: 'The door is closed.',
        ko: '그 문은 닫혀 있다.',
        pairs: [
          { en: 'The door', ko: '그 문은' },
          { en: 'is closed', ko: '닫혀 있다' },
        ],
      },
      {
        level: '보통',
        en: 'This song was written by a student.',
        ko: '이 노래는 한 학생에 의해 쓰였다.',
        pairs: [
          { en: 'This song', ko: '이 노래는' },
          { en: 'was written', ko: '쓰였다' },
          { en: 'by a student', ko: '한 학생에 의해' },
        ],
      },
      {
        level: '보통',
        en: 'English is spoken in many countries.',
        ko: '영어는 많은 나라에서 사용된다.',
        pairs: [
          { en: 'English', ko: '영어는' },
          { en: 'is spoken', ko: '사용된다' },
          { en: 'in many countries', ko: '많은 나라에서' },
        ],
      },
    ],
  },
  {
    id: 'present-perfect',
    stage: '고1',
    title: '현재완료',
    subtitle: '과거와 현재가 이어지는 have p.p.',
    summary:
      '현재완료는 과거에 시작된 일이 현재와 관련될 때 쓴다. 경험, 계속, 완료, 결과 의미가 있다.',
    rules: ['형태는 have 또는 has + 과거분사다.', 'since는 시작점, for는 기간과 함께 쓴다.', 'yesterday처럼 끝난 과거 시점과는 보통 함께 쓰지 않는다.'],
    examples: [
      {
        level: '쉬움',
        en: 'I have lost my key.',
        ko: '나는 열쇠를 잃어버렸다.',
        pairs: [
          { en: 'I', ko: '나는' },
          { en: 'have lost', ko: '잃어버렸다' },
          { en: 'my key', ko: '열쇠를' },
        ],
      },
      {
        level: '보통',
        en: 'She has lived here for five years.',
        ko: '그녀는 여기에서 5년 동안 살아왔다.',
        pairs: [
          { en: 'She', ko: '그녀는' },
          { en: 'has lived', ko: '살아왔다' },
          { en: 'here', ko: '여기에서' },
          { en: 'for five years', ko: '5년 동안' },
        ],
      },
      {
        level: '보통',
        en: 'Have you ever visited Jeju Island?',
        ko: '너는 제주도를 방문해 본 적이 있니?',
        pairs: [
          { en: 'Have you ever visited', ko: '방문해 본 적이 있니' },
          { en: 'you', ko: '너는' },
          { en: 'Jeju Island', ko: '제주도를' },
        ],
      },
    ],
  },
  {
    id: 'relative-clauses',
    stage: '고1',
    title: '관계사',
    subtitle: '명사를 뒤에서 자세히 설명',
    summary:
      '관계대명사와 관계부사는 앞의 명사를 설명하는 절을 이끈다. who, which, that, where, when이 자주 쓰인다.',
    rules: ['사람은 who, 사물은 which를 쓴다.', 'that은 사람과 사물 모두 가능하다.', 'where와 when은 장소와 시간을 설명한다.'],
    examples: [
      {
        level: '쉬움',
        en: 'I know the boy who plays the guitar.',
        ko: '나는 기타를 치는 그 소년을 안다.',
        pairs: [
          { en: 'I know', ko: '나는 안다' },
          { en: 'the boy', ko: '그 소년을' },
          { en: 'who plays the guitar', ko: '기타를 치는' },
        ],
      },
      {
        level: '보통',
        en: 'This is the camera that I bought yesterday.',
        ko: '이것은 내가 어제 산 카메라다.',
        pairs: [
          { en: 'This is', ko: '이것은' },
          { en: 'the camera', ko: '카메라다' },
          { en: 'that I bought yesterday', ko: '내가 어제 산' },
        ],
      },
      {
        level: '보통',
        en: 'The park where we met is near my house.',
        ko: '우리가 만났던 그 공원은 우리 집 근처에 있다.',
        pairs: [
          { en: 'The park', ko: '그 공원은' },
          { en: 'where we met', ko: '우리가 만났던' },
          { en: 'is near my house', ko: '우리 집 근처에 있다' },
        ],
      },
    ],
  },
  {
    id: 'conditionals',
    stage: '고2',
    title: '가정법',
    subtitle: '사실과 다른 상상이나 조건',
    summary:
      '가정법은 실제와 다르거나 가능성이 낮은 상황을 말한다. 현재 사실 반대는 과거형, 과거 사실 반대는 had p.p.를 쓴다.',
    rules: ['가정법 과거는 현재 사실과 반대되는 상상을 말한다.', '가정법 과거완료는 과거 사실의 반대를 말한다.', 'if절과 주절의 시제 조합을 함께 외운다.'],
    examples: [
      {
        level: '쉬움',
        en: 'If I were rich, I would travel the world.',
        ko: '내가 부자라면 세계를 여행할 텐데.',
        pairs: [
          { en: 'If I were rich', ko: '내가 부자라면' },
          { en: 'I would travel', ko: '여행할 텐데' },
          { en: 'the world', ko: '세계를' },
        ],
      },
      {
        level: '보통',
        en: 'If she had studied harder, she would have passed the exam.',
        ko: '그녀가 더 열심히 공부했더라면 시험에 합격했을 텐데.',
        pairs: [
          { en: 'If she had studied harder', ko: '그녀가 더 열심히 공부했더라면' },
          { en: 'she would have passed', ko: '합격했을 텐데' },
          { en: 'the exam', ko: '시험에' },
        ],
      },
      {
        level: '보통',
        en: 'I wish I could speak English fluently.',
        ko: '내가 영어를 유창하게 말할 수 있으면 좋겠다.',
        pairs: [
          { en: 'I wish', ko: '좋겠다' },
          { en: 'I could speak', ko: '말할 수 있으면' },
          { en: 'English fluently', ko: '영어를 유창하게' },
        ],
      },
    ],
  },
  {
    id: 'advanced-structure',
    stage: '고3',
    title: '분사구문, 도치, 강조',
    subtitle: '긴 문장을 줄이고 의미의 초점을 바꿈',
    summary:
      '고등 문법에서는 문장을 줄이거나 순서를 바꿔 의미를 강조한다. 독해에서는 생략된 주어와 접속사를 복원하는 연습이 중요하다.',
    rules: ['분사구문은 접속사와 주어를 줄여 만든다.', '부정어가 문장 앞에 오면 주어와 동사가 도치될 수 있다.', 'It is ... that 강조구문은 특정 정보를 돋보이게 한다.'],
    examples: [
      {
        level: '쉬움',
        en: 'Feeling tired, I went to bed early.',
        ko: '피곤해서 나는 일찍 잠자리에 들었다.',
        pairs: [
          { en: 'Feeling tired', ko: '피곤해서' },
          { en: 'I went to bed', ko: '나는 잠자리에 들었다' },
          { en: 'early', ko: '일찍' },
        ],
      },
      {
        level: '보통',
        en: 'Never have I seen such a beautiful sunset.',
        ko: '나는 그렇게 아름다운 노을을 본 적이 없다.',
        pairs: [
          { en: 'Never have I seen', ko: '본 적이 없다' },
          { en: 'I', ko: '나는' },
          { en: 'such a beautiful sunset', ko: '그렇게 아름다운 노을을' },
        ],
      },
      {
        level: '보통',
        en: 'It was my father that fixed the computer.',
        ko: '컴퓨터를 고친 사람은 바로 내 아버지였다.',
        pairs: [
          { en: 'It was my father that', ko: '바로 내 아버지였다' },
          { en: 'fixed', ko: '고친' },
          { en: 'the computer', ko: '컴퓨터를' },
        ],
      },
    ],
  },
]

const phrasalVerbs = [
  {
    verb: 'get up',
    meaning: '일어나다',
    examples: [
      { en: 'I get up at seven.', ko: '나는 7시에 일어난다.', pairs: [{ en: 'get up', ko: '일어난다' }] },
      { en: 'She got up late today.', ko: '그녀는 오늘 늦게 일어났다.', pairs: [{ en: 'got up', ko: '일어났다' }] },
    ],
  },
  {
    verb: 'wake up',
    meaning: '잠에서 깨다, 깨우다',
    examples: [
      { en: 'I woke up early.', ko: '나는 일찍 잠에서 깼다.', pairs: [{ en: 'woke up', ko: '잠에서 깼다' }] },
      { en: 'Please wake me up at six.', ko: '6시에 나를 깨워 줘.', pairs: [{ en: 'wake me up', ko: '나를 깨워 줘' }] },
    ],
  },
  {
    verb: 'look for',
    meaning: '찾다',
    examples: [
      { en: 'I am looking for my phone.', ko: '나는 내 휴대폰을 찾고 있다.', pairs: [{ en: 'looking for', ko: '찾고 있다' }] },
      { en: 'They looked for a quiet place.', ko: '그들은 조용한 장소를 찾았다.', pairs: [{ en: 'looked for', ko: '찾았다' }] },
    ],
  },
  {
    verb: 'look after',
    meaning: '돌보다',
    examples: [
      { en: 'Can you look after my dog?', ko: '내 개를 돌봐 줄 수 있니?', pairs: [{ en: 'look after', ko: '돌봐' }] },
      { en: 'She looks after her little brother.', ko: '그녀는 어린 남동생을 돌본다.', pairs: [{ en: 'looks after', ko: '돌본다' }] },
    ],
  },
  {
    verb: 'look up',
    meaning: '찾아보다',
    examples: [
      { en: 'Look up this word in the dictionary.', ko: '이 단어를 사전에서 찾아봐.', pairs: [{ en: 'Look up', ko: '찾아봐' }] },
      { en: 'I looked up the address online.', ko: '나는 온라인에서 그 주소를 찾아보았다.', pairs: [{ en: 'looked up', ko: '찾아보았다' }] },
    ],
  },
  {
    verb: 'find out',
    meaning: '알아내다',
    examples: [
      { en: 'I found out the answer.', ko: '나는 답을 알아냈다.', pairs: [{ en: 'found out', ko: '알아냈다' }] },
      { en: 'We need to find out the truth.', ko: '우리는 진실을 알아내야 한다.', pairs: [{ en: 'find out', ko: '알아내야 한다' }] },
    ],
  },
  {
    verb: 'give up',
    meaning: '포기하다',
    examples: [
      { en: 'Do not give up your dream.', ko: '네 꿈을 포기하지 마.', pairs: [{ en: 'give up', ko: '포기하지' }] },
      { en: 'He gave up smoking.', ko: '그는 흡연을 포기했다.', pairs: [{ en: 'gave up', ko: '포기했다' }] },
    ],
  },
  {
    verb: 'put off',
    meaning: '미루다',
    examples: [
      { en: 'We put off the meeting.', ko: '우리는 회의를 미뤘다.', pairs: [{ en: 'put off', ko: '미뤘다' }] },
      { en: 'Do not put off your homework.', ko: '숙제를 미루지 마.', pairs: [{ en: 'put off', ko: '미루지' }] },
    ],
  },
  {
    verb: 'turn on',
    meaning: '켜다',
    examples: [
      { en: 'Turn on the light.', ko: '불을 켜라.', pairs: [{ en: 'Turn on', ko: '켜라' }] },
      { en: 'I turned on the computer.', ko: '나는 컴퓨터를 켰다.', pairs: [{ en: 'turned on', ko: '켰다' }] },
    ],
  },
  {
    verb: 'turn off',
    meaning: '끄다',
    examples: [
      { en: 'Turn off the TV.', ko: 'TV를 꺼라.', pairs: [{ en: 'Turn off', ko: '꺼라' }] },
      { en: 'She turned off the alarm.', ko: '그녀는 알람을 껐다.', pairs: [{ en: 'turned off', ko: '껐다' }] },
    ],
  },
  {
    verb: 'turn down',
    meaning: '거절하다, 줄이다',
    examples: [
      { en: 'He turned down the offer.', ko: '그는 그 제안을 거절했다.', pairs: [{ en: 'turned down', ko: '거절했다' }] },
      { en: 'Please turn down the music.', ko: '음악 소리를 줄여 주세요.', pairs: [{ en: 'turn down', ko: '줄여' }] },
    ],
  },
  {
    verb: 'pick up',
    meaning: '집다, 데리러 가다, 익히다',
    examples: [
      { en: 'Pick up your bag.', ko: '네 가방을 집어라.', pairs: [{ en: 'Pick up', ko: '집어라' }] },
      { en: 'I will pick you up after school.', ko: '나는 방과 후에 너를 데리러 갈 것이다.', pairs: [{ en: 'pick you up', ko: '너를 데리러 갈 것이다' }] },
    ],
  },
  {
    verb: 'come back',
    meaning: '돌아오다',
    examples: [
      { en: 'Come back before dinner.', ko: '저녁 식사 전에 돌아와.', pairs: [{ en: 'Come back', ko: '돌아와' }] },
      { en: 'He came back from Canada.', ko: '그는 캐나다에서 돌아왔다.', pairs: [{ en: 'came back', ko: '돌아왔다' }] },
    ],
  },
  {
    verb: 'go out',
    meaning: '외출하다, 나가다',
    examples: [
      { en: 'I want to go out tonight.', ko: '나는 오늘 밤 외출하고 싶다.', pairs: [{ en: 'go out', ko: '외출하고' }] },
      { en: 'They went out for lunch.', ko: '그들은 점심을 먹으러 나갔다.', pairs: [{ en: 'went out', ko: '나갔다' }] },
    ],
  },
  {
    verb: 'come across',
    meaning: '우연히 발견하다',
    examples: [
      { en: 'I came across an old photo.', ko: '나는 오래된 사진을 우연히 발견했다.', pairs: [{ en: 'came across', ko: '우연히 발견했다' }] },
      { en: 'She came across a useful app.', ko: '그녀는 유용한 앱을 우연히 발견했다.', pairs: [{ en: 'came across', ko: '우연히 발견했다' }] },
    ],
  },
  {
    verb: 'run into',
    meaning: '우연히 만나다',
    examples: [
      { en: 'I ran into my old friend.', ko: '나는 옛 친구를 우연히 만났다.', pairs: [{ en: 'ran into', ko: '우연히 만났다' }] },
      { en: 'We ran into our teacher at the mall.', ko: '우리는 쇼핑몰에서 선생님을 우연히 만났다.', pairs: [{ en: 'ran into', ko: '우연히 만났다' }] },
    ],
  },
  {
    verb: 'take off',
    meaning: '벗다, 이륙하다',
    examples: [
      { en: 'Take off your shoes.', ko: '신발을 벗어라.', pairs: [{ en: 'Take off', ko: '벗어라' }] },
      { en: 'The plane took off on time.', ko: '비행기는 정시에 이륙했다.', pairs: [{ en: 'took off', ko: '이륙했다' }] },
    ],
  },
  {
    verb: 'bring up',
    meaning: '꺼내다, 양육하다',
    examples: [
      { en: 'Do not bring up that topic.', ko: '그 주제를 꺼내지 마.', pairs: [{ en: 'bring up', ko: '꺼내지' }] },
      { en: 'She was brought up by her grandmother.', ko: '그녀는 할머니 손에서 자랐다.', pairs: [{ en: 'brought up', ko: '자랐다' }] },
    ],
  },
  {
    verb: 'grow up',
    meaning: '자라다, 성장하다',
    examples: [
      { en: 'I grew up in Seoul.', ko: '나는 서울에서 자랐다.', pairs: [{ en: 'grew up', ko: '자랐다' }] },
      { en: 'He wants to be a doctor when he grows up.', ko: '그는 자라서 의사가 되고 싶어 한다.', pairs: [{ en: 'grows up', ko: '자라서' }] },
    ],
  },
  {
    verb: 'check out',
    meaning: '확인하다, 살펴보다',
    examples: [
      { en: 'Check out this video.', ko: '이 영상을 확인해 봐.', pairs: [{ en: 'Check out', ko: '확인해 봐' }] },
      { en: 'We checked out the new cafe.', ko: '우리는 새 카페를 살펴보았다.', pairs: [{ en: 'checked out', ko: '살펴보았다' }] },
    ],
  },
  {
    verb: 'work out',
    meaning: '운동하다, 해결되다',
    examples: [
      { en: 'I work out three times a week.', ko: '나는 일주일에 세 번 운동한다.', pairs: [{ en: 'work out', ko: '운동한다' }] },
      { en: 'Everything worked out well.', ko: '모든 일이 잘 해결되었다.', pairs: [{ en: 'worked out', ko: '해결되었다' }] },
    ],
  },
  {
    verb: 'make up',
    meaning: '지어내다, 화해하다, 구성하다',
    examples: [
      { en: 'Do not make up stories.', ko: '이야기를 지어내지 마.', pairs: [{ en: 'make up', ko: '지어내지' }] },
      { en: 'They made up after the fight.', ko: '그들은 싸움 후에 화해했다.', pairs: [{ en: 'made up', ko: '화해했다' }] },
    ],
  },
  {
    verb: 'set up',
    meaning: '설치하다, 준비하다',
    examples: [
      { en: 'I set up my new laptop.', ko: '나는 새 노트북을 설치했다.', pairs: [{ en: 'set up', ko: '설치했다' }] },
      { en: 'They set up a study group.', ko: '그들은 스터디 그룹을 만들었다.', pairs: [{ en: 'set up', ko: '만들었다' }] },
    ],
  },
  {
    verb: 'fill out',
    meaning: '작성하다',
    examples: [
      { en: 'Fill out this form.', ko: '이 양식을 작성해라.', pairs: [{ en: 'Fill out', ko: '작성해라' }] },
      { en: 'I filled out the application.', ko: '나는 지원서를 작성했다.', pairs: [{ en: 'filled out', ko: '작성했다' }] },
    ],
  },
  {
    verb: 'hand in',
    meaning: '제출하다',
    examples: [
      { en: 'Hand in your homework today.', ko: '오늘 숙제를 제출해라.', pairs: [{ en: 'Hand in', ko: '제출해라' }] },
      { en: 'She handed in the report on time.', ko: '그녀는 보고서를 제시간에 제출했다.', pairs: [{ en: 'handed in', ko: '제출했다' }] },
    ],
  },
]

const stageOrder = ['전체', ...new Set(grammarLessons.map((lesson) => lesson.stage))]

function HighlightText({ text, pairs, type }) {
  const sortedPairs = [...pairs].sort((a, b) => b[type].length - a[type].length)
  const pattern = sortedPairs.map((pair) => escapeRegExp(pair[type])).join('|')

  if (!pattern) {
    return text
  }

  return text.split(new RegExp(`(${pattern})`, 'g')).map((part, index) => {
    const pairIndex = pairs.findIndex((pair) => pair[type] === part)

    if (pairIndex === -1) {
      return part
    }

    return (
      <mark className={`pair pair-${pairIndex % 5}`} key={`${part}-${index}`}>
        {part}
      </mark>
    )
  })
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function App() {
  const [section, setSection] = useState('grammar')
  const [stage, setStage] = useState('전체')
  const [query, setQuery] = useState('')

  const normalizedQuery = query.trim().toLowerCase()

  const filteredLessons = useMemo(() => {
    return grammarLessons.filter((lesson) => {
      const matchesStage = stage === '전체' || lesson.stage === stage
      const haystack = `${lesson.title} ${lesson.subtitle} ${lesson.summary}`.toLowerCase()
      return matchesStage && (!normalizedQuery || haystack.includes(normalizedQuery))
    })
  }, [normalizedQuery, stage])

  const filteredPhrasalVerbs = useMemo(() => {
    return phrasalVerbs.filter((item) => {
      const haystack = `${item.verb} ${item.meaning} ${item.examples
        .map((example) => `${example.en} ${example.ko}`)
        .join(' ')}`.toLowerCase()
      return !normalizedQuery || haystack.includes(normalizedQuery)
    })
  }, [normalizedQuery])

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <span className="brand-mark">E</span>
          <div>
            <p className="eyebrow">English Grammar Desk</p>
            <h1>문법 공부방</h1>
          </div>
        </div>

        <nav className="nav-tabs" aria-label="학습 섹션">
          <button className={section === 'grammar' ? 'active' : ''} onClick={() => setSection('grammar')} type="button">
            문법 로드맵
          </button>
          <button className={section === 'phrasal' ? 'active' : ''} onClick={() => setSection('phrasal')} type="button">
            구동사 정리
          </button>
        </nav>

        <label className="search-box">
          <span>검색</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="동사, 전치사, give up..."
          />
        </label>

        {section === 'grammar' && (
          <div className="stage-filter" aria-label="학년 필터">
            {stageOrder.map((item) => (
              <button className={stage === item ? 'active' : ''} key={item} onClick={() => setStage(item)} type="button">
                {item}
              </button>
            ))}
          </div>
        )}
      </aside>

      <section className="content-panel">
        <header className="page-header">
          <div>
            <p className="eyebrow">중학교 기초부터 고3 독해 문법까지</p>
            <h2>{section === 'grammar' ? '문법을 순서대로 쌓는 화면' : '실제로 자주 쓰는 구동사'}</h2>
          </div>
          <div className="stat-strip" aria-label="학습 통계">
            <span>{grammarLessons.length}개 문법</span>
            <span>{phrasalVerbs.length}개 구동사</span>
            <span>예문 {grammarLessons.length * 3 + phrasalVerbs.length * 2}개</span>
          </div>
        </header>

        {section === 'grammar' ? (
          <div className="lesson-grid">
            {filteredLessons.map((lesson, index) => (
              <article className="lesson-card" id={lesson.id} key={lesson.id}>
                <div className="card-head">
                  <span className="step-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="stage-pill">{lesson.stage}</span>
                </div>
                <h3>{lesson.title}</h3>
                <p className="subtitle">{lesson.subtitle}</p>
                <p className="summary">{lesson.summary}</p>
                <ul className="rule-list">
                  {lesson.rules.map((rule) => (
                    <li key={rule}>{rule}</li>
                  ))}
                </ul>
                <div className="example-list">
                  {lesson.examples.map((example) => (
                    <ExampleBlock example={example} key={`${lesson.id}-${example.en}`} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="phrasal-grid">
            {filteredPhrasalVerbs.map((item) => (
              <article className="phrasal-card" key={item.verb}>
                <div className="phrasal-title">
                  <h3>{item.verb}</h3>
                  <span>{item.meaning}</span>
                </div>
                <div className="example-list compact">
                  {item.examples.map((example) => (
                    <ExampleBlock example={{ ...example, level: '예문' }} key={`${item.verb}-${example.en}`} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

function ExampleBlock({ example }) {
  return (
    <div className="example-block">
      <span className="level-tag">{example.level}</span>
      <p className="english">
        <HighlightText text={example.en} pairs={example.pairs} type="en" />
      </p>
      <p className="korean">
        <HighlightText text={example.ko} pairs={example.pairs} type="ko" />
      </p>
    </div>
  )
}

export default App
