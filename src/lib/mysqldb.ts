import mysql from "mysql2/promise";

let pool: mysql.Pool | null = null;

export async function getDb() {
  if (!pool) {
    console.log("🔵 [DB] Initializing MySQL pool...");
    console.log("🔵 [DB] Host:", process.env.DB_HOST);
    console.log("🔵 [DB] Port:", process.env.DB_PORT);
    console.log("🔵 [DB] User:", process.env.DB_USER);
    console.log("🔵 [DB] Database:", process.env.DB_NAME);
    console.log("🔵 [DB] SSL enabled: true");

    try {
      pool = mysql.createPool({
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || 3306),
        user: process.env.DB_USER,
        password: process.env.DB_PASS, // ❌ never log this
        database: process.env.DB_NAME,
        waitForConnections: true,
        connectionLimit: 5,
        connectTimeout: 28800,
      });

      // 🔍 Test connection immediately
      const conn = await pool.getConnection();
      console.log("✅ [DB] MySQL connection established successfully");
      conn.release();

      // Optional pool events
      pool.on("connection", () => {
        console.log("🟢 [DB] New MySQL connection created");
      });

      pool.on("acquire", () => {
        console.log("🟡 [DB] Connection acquired from pool");
      });

      pool.on("release", () => {
        console.log("🔵 [DB] Connection released back to pool");
      });

    } catch (err: any) {
      console.error("❌ [DB] MySQL connection failed");
      console.error("❌ [DB] Error name:", err.name);
      console.error("❌ [DB] Error code:", err.code);
      console.error("❌ [DB] Error message:", err.message);
      throw err; // VERY IMPORTANT
    }
  }

  return pool;
}
