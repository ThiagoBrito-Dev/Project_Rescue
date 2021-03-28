import { Request, Response } from 'express';
import { Occurrences } from '../models/occurrences';
import * as yup from 'yup';
import occurrencesView from '../views/occurrencesView';

class OccurrencesController {
  async show(request: Request, response: Response) {
    const occurrencesShow = await Occurrences.find({ _id: request.params.id });

    return response.status(200).json(occurrencesView.render(occurrencesShow[0]));
  };

  async create(request: Request, response: Response) {
    const { animal_name, latitude, longitude, description, was_found, photos, highlighter_color, contact_name, contact_info } = request.body;

    const schema = yup.object().shape({
      animal_name: yup.string().required(),
      description: yup.string().required(),
      was_found: yup.boolean().required(),
      contact_name: yup.string().required(),
      contact_info: yup.string().required()
    });

    try {
      await schema.validate(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json(err);
    };

    const occurrences = request.body;

    function getRandomColor() {
      let letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    const highlighters = await Occurrences.find({ animal_name: occurrences.animal_name}, { _id: 0, highlighter_color: 1 });  

    if (highlighters.length === 0) {
      occurrences.highlighter_color = getRandomColor();
    } else {
      occurrences.highlighter_color = highlighters.toString().substring(22, 29);
    }
    
    await Occurrences.create(occurrences);

    return response.status(201).json(occurrences);
  };
};

export { OccurrencesController };