 export class Task 
{
    private title: string;
    private description: string;
    private dueDate: Date;
    private priority: number;
    private completed: boolean;

    constructor(title: string, description: string, dueDate: Date, priority: number, completed: boolean)
    {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed;
    }

    //getters and setters
    public getTitle(): string
    {
        return this.title;
    }
    public setTitle(title: string): void
    {
        this.title = title;
    }
    public getDescription(): string
    {
        return this.description;
    }
    public setDescription(description: string): void
    {
        this.description = description;
    }
    public getDueDate(): Date
    {
        return this.dueDate;
    }
    public setDueDate(dueDate: Date): void
    {
        this.dueDate = dueDate;
    }
    public getPriority(): number
    {
        return this.priority;
    }
    public setPriority(priority: number): void
    {
        this.priority = priority;
    }
    public getCompleted(): boolean
    {
        return this.completed;
    }





} 