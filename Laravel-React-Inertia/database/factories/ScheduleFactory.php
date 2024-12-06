<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Schedule>
 */
class ScheduleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $start = $this->faker->dateTimeBetween('2024-12-01 00:00:00', '2024-12-26 23:59:59');

        $end = (clone $start)->modify('+'.rand(0, 4).' days')->setTime(rand(0, 23), rand(0, 59), rand(0, 59));
        return [
            //
            'create_user_id'=> fake()->numberBetween(1,5),
            'group_id'=>fake()->numberBetween(1,5),
            'title'=>fake()->word(),
            'discription'=>fake()->realtext(50),
            'start'=>$start,
            'end'=>$end,
            'color'=>'blue',
        ];
    }
}
