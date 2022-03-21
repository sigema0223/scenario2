from negation import negation_generator
from syllogisms import syllogisms

import random
import json
import uuid


def create_json_neg(condition):
    datafile = []
    while condition:
        obj = {}
        questions = negation_generator()
        qs = questions.main(random.randint(1, 5))
        randIntHolder = random.randint(0, len(qs[2]))
        qs[2].insert(randIntHolder, qs[1])
        obj["id"] = uuid.uuid4()
        obj["question"] = qs[0]
        obj["answerIndex"] = randIntHolder
        obj["wrongAnswers"] = qs[2]
        datafile.append(obj)
        print(datafile)
    return datafile


def create_json_syll(condition):
    datafile = []
    while condition:
        obj = {}
        questions = syllogisms()
        qs, ans, wa = questions.main(random.randint(1, 5))
        randIntHolder = random.randint(0, len(wa))
        wa.insert(randIntHolder, ans)
        obj["id"] = uuid.uuid4()
        obj["question"] = qs
        obj["answerIndex"] = randIntHolder
        obj["wrongAnswers"] = wa
        datafile.append(obj)
        print(datafile)
    return datafile


def generateQs(sylFilename, negFilename, condition):

    while condition:
        # read file name
        nData = create_json_neg(condition)
        sData = create_json_syll(condition)
        with open(sylFilename, "r") as file, open(negFilename, "r") as file_:
            data = json.load(file)
            data_ = json.load(data_)
        # append new data to json
        data.append(sData)
        data_.append(nData)

        with open(sylFilename, "w") as file, open(negFilename, "w") as file_:
            json.dump(data, file, indent=4)
            json.dump(data_, file_, indent=4)


if __name__ == "__main__":
    generateQs(
        "/Users/ariel/Scenario2/scenario2/public/questions/data_syllogisms.json",
        "scenario2/public/questions/data.json",
        True,
    )

    """
    
    example test:


    negFile = "/Users/ariel/scenario2/public/questions/data.json"
    sylFile = "/Users/ariel/Scenario2/scenario2/public/questions/data_syllogisms.json"
    i = 0
    while i < 2:
        # read file name
        sylData = create_json_syll()
        with open(sylFile, "r") as file:
            data = json.load(file)

        # append new data to json
        data.append(sylData)

        with open(sylFile, "w") as file:
            json.dump(data, file, indent=4)
        i += 1
    """
