import React from 'react';

interface PlantList {
    name: string;
    category: string;
    id: string;
    bestSale?: boolean;
    light: number;
    water: number;
    cover: string;
    price: number;
}

export interface PlantsListInterface extends Array<PlantList> {}

export interface CareScaleInterface {
    scaleValue: number;
    careType: string;
}

export interface PlantItemInterface {
    name: string;
    cover: string;
    id: string;
    light: number;
    water: number;
    price: any;
}

export interface CartInterface {
    cart: any;
    updateCart: any;
}

export interface ShoppingListInterface {
    cart: any;
    updateCart: any;
}

export interface CategoryInterface {
    select: string;
    setSelect(str: string): void;
    categories: string[];
}

export interface planTypeInterface {
    amount: number;
    price: number;
}

export interface cartListInterface {
    name: string;
    price: number;
    amount: number;
}