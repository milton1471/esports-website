-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS infinity_gaming;
USE infinity_gaming;

-- Tabla para miembros del equipo y sponsors
CREATE TABLE team_members (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image VARCHAR(500),
    type ENUM('member', 'sponsor', 'staff') DEFAULT 'member',
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insertar datos de ejemplo
INSERT INTO team_members (name, image, type, description) VALUES
('Logitech G', 'https://via.placeholder.com/200x100/000000/FFFFFF?text=Logitech+G', 'sponsor', 'Sponsor oficial de gaming'),
('SG1', 'https://via.placeholder.com/200x100/000000/FFFFFF?text=SG1', 'sponsor', 'Patrocinador principal'),
('Team Infinity', 'https://via.placeholder.com/200x200/ff3333/FFFFFF?text=Team+Infinity', 'member', 'Equipo principal de esports');

-- Tabla para equipos de gaming
CREATE TABLE teams (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    game VARCHAR(255) NOT NULL,
    logo VARCHAR(500),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla para staff
CREATE TABLE staff (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    position VARCHAR(255),
    image VARCHAR(500),
    bio TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);