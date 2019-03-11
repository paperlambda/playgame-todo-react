import React from 'react';

const FilterOptions = () => {
    return (
        <div>
          <label>Shows :</label>
          <select>
            <option value="">---------------</option>
            <option value="">COMPLETED TASK</option>
            <option value="">UNCOMPLETED TASK</option>
          </select>
        </div>
    )
}

export default FilterOptions;