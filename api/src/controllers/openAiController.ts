import { BadRequest } from "exceptions/BadRequest";
import { Request, Response } from "express";
import { openai } from "lib/OpenAi";

export const generatePost = async (req: Request, res: Response) => {
    const { data } = req.body;

    if (!data) throw new BadRequest("No data");

    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-0613",
        messages: [
            {
                role: "user",
                content: data,
            },
        ],
    });

    return completion.choices[0].message;
};
