import openai
import random
import inflect
import json


class syllogisms:
    def __init__(self):
        self.p = inflect.engine()
        self.gen_syl = "A syllogism is a kind of logical argument that applies deductive reasoning to arrive at a conclusion based on two propositions that are asserted or assumed to be true. A syllogism arises when two true premises validly imply a conclusion or the main point that the argument aims to get across. In this task, the example will be given with variables instead of propositions and the task is to generate syllogism and the list of objects propositions used in it. It is important to keep them in order s, m and p:\n\nExample: All (m) are (s), some (m) are (p). Some (s) are (p).\nSolution:  All squares are equilateral, some squares are rectangles. Some rectangles are equilateral.\nList: [equilateral, square, rectangle]\n\nExample: All (s) are (m), all (m) are (p). All (s) are (p).\nSolution:  All employees are human, all humans are mammals. All employees are mammals.\nList: [employee, human, mammal]\nExample: Some (m) are (s), no (p) is (m) some (s) are not (p).\nSolution:  Some devices are toys, no dog is a device. Some toys are not dogs. \nList: [toy, device, dog]\nExample:"

    def plur(self, txt):
        """
        Changes singular form of a word to plural
        """
        if "(" in txt:
            return txt
        else:
            return self.p.plural(txt)

    def gpt3(self, stext, temp, tokens):
        openai.api_key = "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"
        response = openai.Completion.create(
            engine="davinci-instruct-beta",
            prompt=stext,
            temperature=temp,
            max_tokens=tokens,
            top_p=1,
            frequency_penalty=0,
            presence_penalty=0,
        )
        content = response.choices[0].text.split(".")
        return content

        """
            Here are 24 methods for generating 24 different types of syllogisms as described in the paper (https://arxiv.org/pdf/2007.07320.pdf)
            """

    def barbara(self, s, m, p):
        question = (
            "All "
            + str(self.plur(s))
            + " are "
            + str(self.plur(m))
            + ", all "
            + str(self.plur(m))
            + " are "
            + str(self.plur(p))
        )
        answer = "All " + str(self.plur(s)) + " are " + str(self.plur(p))
        return question, answer, 1

    def barbari(self, s, m, p):
        question = (
            "All "
            + str(self.plur(s))
            + " are "
            + str(self.plur(m))
            + ", all "
            + str(self.plur(m))
            + " are "
            + str(self.plur(p))
        )
        answer = "Some " + str(self.plur(s)) + " are " + str(self.plur(p))
        return question, answer, 2

    def celarent(self, s, m, p):
        question = (
            "All "
            + str(self.plur(s))
            + " are "
            + str(self.plur(m))
            + ", no "
            + str(m)
            + " is "
            + str(p)
        )
        answer = "No " + str(s) + " is " + str(p)
        return question, answer, 3

    def cesare(self, s, m, p):
        question = (
            "All "
            + str(self.plur(s))
            + " are "
            + str(self.plur(m))
            + ", no "
            + str(p)
            + " is "
            + str(m)
        )
        answer = "No " + str(s) + " is " + str(p)
        return question, answer, 3

    def calemes(self, s, m, p):
        question = (
            "No "
            + str(m)
            + " is "
            + str(s)
            + ", all "
            + str(self.plur(p))
            + " are "
            + str(self.plur(m))
        )
        answer = "No " + str(s) + " is " + str(p)
        return question, answer, 3

    def camestres(self, s, m, p):
        question = (
            "No "
            + str(s)
            + " is "
            + str(m)
            + ", all "
            + str(self.plur(p))
            + " are "
            + str(self.plur(m))
        )
        answer = "No " + str(s) + " is " + str(p)
        return question, answer, 3

    def darii(self, s, m, p):
        question = (
            "Some "
            + str(self.plur(s))
            + " are "
            + str(self.plur(m))
            + ", all "
            + str(self.plur(m))
            + " are "
            + str(self.plur(p))
        )
        answer = "Some " + str(self.plur(s)) + " are " + str(self.plur(p))
        return question, answer, 2

    def datisi(self, s, m, p):
        question = (
            "Some "
            + str(self.plur(m))
            + " are "
            + str(self.plur(s))
            + ", all "
            + str(self.plur(m))
            + " are "
            + str(self.plur(p))
        )
        answer = "Some " + str(self.plur(s)) + " are " + str(self.plur(p))
        return question, answer, 2

    def darapti(self, s, m, p):
        question = (
            "All "
            + str(self.plur(m))
            + " are "
            + str(self.plur(s))
            + ", all "
            + str(self.plur(m))
            + " are "
            + str(self.plur(p))
        )
        answer = "Some " + str(self.plur(s)) + " are " + str(self.plur(p))
        return question, answer, 2

    def disamis(self, s, m, p):
        question = (
            "All "
            + str(self.plur(m))
            + " are "
            + str(self.plur(s))
            + ", some "
            + str(m)
            + " are "
            + str(self.plur(p))
        )
        answer = "Some " + str(self.plur(s)) + " are " + str(self.plur(p))
        return question, answer, 2

    def dimatis(self, s, m, p):
        question = (
            "All "
            + str(self.plur(m))
            + " are "
            + str(self.plur(s))
            + ", some "
            + str(p)
            + " are "
            + str(self.plur(m))
        )
        answer = "Some " + str(self.plur(s)) + " are " + str(self.plur(p))
        return question, answer, 2

    def baroco(self, s, m, p):
        question = (
            "Some "
            + str(self.plur(s))
            + " are not "
            + str(m)
            + ", all "
            + str(self.plur(p))
            + " is "
            + str(m)
        )
        answer = "Some " + str(self.plur(s)) + " are not " + str(self.plur(p))
        return question, answer, 4

    def cesaro(self, s, m, p):
        question = (
            "All "
            + str(self.plur(s))
            + " are "
            + str(self.plur(m))
            + ", no "
            + str(p)
            + " is "
            + str(m)
        )
        answer = "Some " + str(self.plur(s)) + " are not " + str(self.plur(p))
        return question, answer, 4

    def celaront(self, s, m, p):
        question = (
            "All "
            + str(self.plur(s))
            + " are "
            + str(self.plur(m))
            + ", no "
            + str(m)
            + " is "
            + str(p)
        )
        answer = "Some " + str(self.plur(s)) + " are not " + str(self.plur(p))
        return question, answer, 4

    def camestros(self, s, m, p):
        question = (
            "No "
            + str(s)
            + " is "
            + str(m)
            + ", all "
            + str(self.plur(p))
            + " are "
            + str(self.plur(m))
        )
        answer = "Some " + str(self.plur(s)) + " are not " + str(self.plur(p))
        return question, answer

    def calemos(self, s, m, p):
        question = (
            "No "
            + str(m)
            + " is "
            + str(s)
            + ", all "
            + str(self.plur(p))
            + " are "
            + str(self.plur(m))
        )
        answer = "Some " + str(self.plur(s)) + " are not " + str(self.plur(p))
        return question, answer, 4

    def bocardo(self, s, m, p):
        question = (
            "All "
            + str(self.plur(m))
            + " are "
            + str(self.plur(s))
            + ", some "
            + str(m)
            + " are not "
            + str(self.plur(p))
        )
        answer = "Some " + str(self.plur(s)) + " are not " + str(self.plur(p))
        return question, answer, 4

    def bamalip(self, s, m, p):
        question = (
            "All "
            + str(self.plur(m))
            + " are "
            + str(self.plur(s))
            + ", all "
            + str(self.plur(p))
            + " are "
            + str(self.plur(m))
        )
        answer = "Some " + str(self.plur(s)) + " are " + str(self.plur(p))
        return question, answer, 2

    def ferio(self, s, m, p):
        question = (
            "Some "
            + str(self.plur(s))
            + " are "
            + str(self.plur(m))
            + ", no "
            + str(m)
            + " is "
            + str(p)
        )
        answer = "Some " + str(self.plur(s)) + " are not " + str(self.plur(p))
        return question, answer, 4

    def festino(self, s, m, p):
        question = (
            "Some "
            + str(self.plur(s))
            + " are "
            + str(self.plur(m))
            + ", no "
            + str(p)
            + " is "
            + str(m)
        )
        answer = "Some " + str(self.plur(s)) + " are not " + str(self.plur(p))
        return question, answer, 4

    def ferison(self, s, m, p):
        question = (
            "Some "
            + str(self.plur(m))
            + " are "
            + str(self.plur(s))
            + ", no "
            + str(m)
            + " is "
            + str(p)
        )
        answer = "Some " + str(self.plur(s)) + " are not " + str(self.plur(p))
        return question, answer, 4

    def fresison(self, s, m, p):
        question = (
            "Some "
            + str(self.plur(m))
            + " are "
            + str(self.plur(s))
            + ", no "
            + str(p)
            + " is "
            + str(m)
        )
        answer = "Some " + str(self.plur(s)) + " are not " + str(self.plur(p))
        return question, answer, 4

    def felapton(self, s, m, p):
        question = (
            "All "
            + str(self.plur(m))
            + " are "
            + str(self.plur(s))
            + ", no "
            + str(m)
            + " is "
            + str(p)
        )
        answer = "Some " + str(self.plur(s)) + " are not " + str(self.plur(p))
        return question, answer, 4

    def fesapo(self, s, m, p):
        question = (
            "All "
            + str(self.plur(m))
            + " are "
            + str(self.plur(s))
            + ", no "
            + str(p)
            + " is "
            + str(m)
        )
        answer = "Some " + str(self.plur(s)) + " are not " + str(self.plur(p))
        return question, answer, 4

    def neg_check(self, txt):
        """
        Negates statement
        """
        if "." not in txt:
            txt = txt + "."
        while True:
            response = self.gpt3(self.gen_neg + txt + "\nnegation:", 0.85, 25)[0].split(
                " "
            )
            neg = " ".join(word for word in response[1:])
            if neg != txt:
                return neg.replace(".", "")

    def gen_question(self, num):
        """
        Picks one of the 24 syllogism generating methods (depending on the variable num) and via GPT-3 generates the coresponding syllogism
        """
        functions = [
            self.barbara,
            self.barbari,
            self.celarent,
            self.cesare,
            self.calemes,
            self.camestres,
            self.darii,
            self.datisi,
            self.darapti,
            self.disamis,
            self.dimatis,
            self.baroco,
            self.cesaro,
            self.celaront,
            self.camestros,
            self.calemos,
            self.bocardo,
            self.bamalip,
            self.ferio,
            self.festino,
            self.ferison,
            self.fresison,
            self.felapton,
            self.fesapo,
        ]
        txt = (
            functions[num]("(s)", "(m)", "(p)")[0]
            + ". "
            + functions[num]("(s)", "(m)", "(p)")[1]
        )
        while True:
            response = self.gpt3(self.gen_syl + txt + "\nSolution:", 0.6, 40)
            if "[" in response[-1]:
                val = response[-1].split("[", 1)[1].split("]")[0]
                val = val.split(",")
                if len(list(set(val))) == 3:
                    s = val[0]
                    m = val[1]
                    p = val[2]
                    return functions[num](s, m, p), s, m, p

    def answer_corruptor(self, det, s, m, p):
        """
        Generates other 3 wrong answers
        """
        three_bad_an = []
        if det != 1:
            three_bad_an.append(
                "All " + str(self.plur(s)) + " are " + str(self.plur(p))
            )
        if det != 2:
            three_bad_an.append(
                "Some " + str(self.plur(s)) + " are " + str(self.plur(p))
            )
        if det != 3:
            three_bad_an.append("No " + str(s) + " is " + str(p))
        if det != 4:
            three_bad_an.append(
                "Some " + str(self.plur(s)) + " are not " + str(self.plur(p))
            )
        return three_bad_an

    def main(self, num):
        """
        Generates Question, Correct answer, and 3 wrong answers
        """
        lst = self.gen_question(num)
        question = lst[0][0]
        correct_answer = lst[0][1]
        wrong_answer = self.answer_corruptor(lst[0][2], lst[1], lst[2], lst[3])
        return question, correct_answer, wrong_answer
