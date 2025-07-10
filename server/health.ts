import type { Express } from "express";

export function setupHealthCheck(app: Express) {
  // Health check endpoint for Render
  app.get("/api/health", (req, res) => {
    res.status(200).json({
      status: "healthy",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      version: process.env.npm_package_version || "1.0.0"
    });
  });

  // Simple ping endpoint
  app.get("/ping", (req, res) => {
    res.status(200).send("pong");
  });
}