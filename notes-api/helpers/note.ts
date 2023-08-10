import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize.config';

export class Note extends Model {
	id!: number;
	time!: string;
	name!: string;
	content!: string;
	category!: string;
}

Note.init(
	{
		time: DataTypes.STRING,
		name: DataTypes.STRING,
		content: DataTypes.STRING,
		category: DataTypes.STRING,
		archivedDate: DataTypes.STRING,
	},
	{
		sequelize,
		modelName: 'Note',
	}
);